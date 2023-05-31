import axios from "axios";
import {Base_Url} from "./Base_Url.js";
import {Apis} from "./Auth/Apis.js";
import {resStatus} from "./Auth/resStatus.js";
import {toast} from "react-toastify";

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