import axios from "axios";
import {Base_Url} from "./Base_Url.js";
import {Apis} from "./Auth/Apis.js";
import {resStatus} from "./Auth/resStatus.js";
import {toast} from "react-toastify";

export const deleteMethods = async (url,id) => {
    const del=window.confirm("delete")
    if (del){
        try {
            const res = await axios.delete(url + "/" + id)
            if (resStatus(res.status)) {
                toast.success("deleted")
            }
        } catch (err) {
            toast.error(err.response.message)
        }
    }

}

export const  GetVideoNews = async (setData) => {
    try {
        const res  = await axios.get(Base_Url + Apis.news + "/list")
        setData(res.data)
    }catch (err){

    }
}

export const LoginJon = async (data) => {
    try {
        const res = await axios.post(Base_Url + Apis.auth + "/login", data)
        if (resStatus(res.status)){
            localStorage.setItem("path","/auth/admin/uTeam/projects")
            return toast.success("logindan muvaffaqiyatli o'tdingiz", {position: "top-center"})
        }
    }catch (err){
        localStorage.setItem("path","/auth/uTeam/login")
        toast.error(err.message)
    }
}
export const addFooter=async (data)=>{
    try {
        const res=await axios.post(Base_Url+Apis.footer, data)
        toast.success(res.data.message)
    }catch (err){
        console.log(err)
    }
}
export const EditFooter=async (id, data, getAll)=>{
    try {
        const res=await axios.put(Base_Url+Apis.footer+"/"+id, data)
        toast.success("edited bro")
        getAll()
    }
    catch (err){
        console.log(err)
    }
}
export const getFooters=async(setData)=>{

    try {
        const res=await axios.get(Base_Url+ Apis.footer)
        setData(res.data)
    }
    catch (err){
        console.log(err)
    }
}