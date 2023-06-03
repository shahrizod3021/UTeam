import axios from "axios";
import {Base_Url} from "./Base_Url.js";
import {Apis} from "./Auth/Apis.js";
import {resStatus} from "./Auth/resStatus.js";
import {toast} from "react-toastify";

export const GetVideoNews = async (setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.news + "/list")
        setData(res.data)
    } catch (err) {

    }
}

export const AddNews = async (name, description) => {
    try {
        const res = await axios.post(Base_Url + Apis.news + "?name=" + name + "&description=" + description)
        if (resStatus(res.status)) {
            localStorage.setItem("newsId", res.data.id)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const PhotoUpload = async (data) => {
    try {
        const res = await axios.post(Base_Url + Apis.attachment, data)
        if (resStatus(res.status)) {
            localStorage.setItem("photoId", res.data)
        }
    } catch (err) {
        return toast.error("rasm saqalshda hatolik")
    }
}

export const DeleteNews = async (id) => {
    try {
        const res = await axios.delete(Base_Url + Apis.news + "/" + id)
        if (resStatus(res.status)) {
            return toast.success(res.data.message)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const LoginJon = async (data) => {
    try {
        const res = await axios.post(Base_Url + Apis.auth + "/login", data)
        if (resStatus(res.status)) {
            localStorage.setItem("path", "/auth/admin/uTeam/projects")
            localStorage.setItem("adminData", res.data.user.id)
            return toast.success("logindan muvaffaqiyatli o'tdingiz", {position: "top-center"})
        }
    } catch (err) {
        localStorage.setItem("path", "/auth/uTeam/login")
        toast.error(err.message)
    }
}

export const OneWorkerjon = async (id, setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.worker + "/" + id)
        setData(res.data)
    } catch (err) {
    }
}
export const GetTeam = async (setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.worker + "/list")
        setData(res.data)
    } catch (err) {
    }
}
export const AddWorker = async (data) => {
    try {
        const res = await axios.post(Base_Url + Apis.worker + "/addWorker", data)
        if (resStatus(res.status)) {
            localStorage.setItem("workerId", res.data.id)
        }
    } catch (err) {
        toast.error("ushbu telefon raqam yoki git hub accaunt bizda mavjud")
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }
}

export const Orderingjon = async (data) => {
    try {
        const res = await axios.post(Base_Url + Apis.order + "/addOrder", data)
        if (resStatus(res.status)) {
            return toast.success(res.data.message)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const AddProjects = async (name, description, link, who) => {
    if (!link.startsWith("https://")) {
        toast.warning("linkni kiritishda hatolik", {position: "top-center"})
        return setTimeout(() => (
            window.location.reload()
        ), 1000)
    }
    try {
        const res = await axios.post(Base_Url + Apis.projects + "?name=" + name + "&description=" + description + "&link=" + link + "&who=" + who)
        if (resStatus(res.status)) {
            localStorage.setItem("projectId", res.data.id)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const GetProjects = async (setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.projects)
        setData(res.data)
    } catch (err) {

    }
}

export const GetOrder = async (setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.order)
        setData(res.data)
    } catch (err) {
    }
}
export const getMessages = async (setData) => {

    try {
        const res = await axios.get(Base_Url + Apis.message)
        setData(res.data)
    } catch (err) {
    }
}
export const sendMessage = async (data) => {
    if (data.name.trim().length === 0) {
        return toast.warning("ismizni kiriting")
    }
    if (data.phoneNumber.trim().length !== 9) {
        return toast.warning("telefon raqamni to'g'ri kiriting")
    }
    try {
        const res = await axios.post(Base_Url + Apis.message, data)
        toast.success(res.data.message, {position: "top-center"})
    } catch (err) {
    }
}
export const addFooter = async (data) => {
    if (data.name.trim().length === 0 || data.link.trim().length === 0 || data.icon.trim().length === 0) {
        toast.warning("enter info")
    }
    if (!data.link.startsWith("https://")) {
        return toast.warning("linkni kiritishda hatolik")
    }
    try {
        const res = await axios.post(Base_Url + Apis.footer, data)
    } catch (err) {
    }
}

export const EditFooter = async (id, data) => {
    if (data.link.trim().length !== 0) {
        if (!data.link.startsWith("https://")) {
            return toast.warning("linkni kiritishda hatolik", {position: "top-center"})
        }
    }
    try {
        const res = await axios.put(Base_Url + Apis.footer + "/" + id, data)
        toast.success(res.data.message)
    } catch (err) {
        return toast.error("taxrirlashda hatolik")
    }
}
export const getFooter = async (setData) => {
    try {
        const res = await axios.get(Base_Url + Apis.footer)
        setData(res.data)
    } catch (err) {
    }
}
export const deleteMethods = async (url, id, getAll) => {
    const del = window.confirm("delete")
    if (del) {
        try {
            const res = await axios.delete(url + "/" + id)
            if (resStatus(res.status)) {
                toast.success("deleted")
                getAll()
            }
        } catch (err) {
            toast.error(err.response.message)
        }
    }

}

export const DeleteWorker = async (id) => {
    try {
        const res =await axios.delete(Base_Url + Apis.worker + "/"  + id)
        if (resStatus(res.status)){
            return toast.success(res.data.message)
        }
    }catch (err){

    }
}