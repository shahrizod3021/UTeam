import {useEffect, useState} from "react";
import {AddNews, DeleteNews, GetVideoNews, PhotoUpload} from "../../Service/service.js";
import {Loading} from "../../Component/Loading.jsx";
import Carousel from "react-multi-carousel";
import {Apis} from "../../Service/Auth/Apis.js";
import axios from "axios";
import {Base_Url} from "../../Service/Base_Url.js";
import {toast} from "react-toastify";

export const VideoNews = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [videoNews, setVideoNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    const getVideoNews = async () => {
        await GetVideoNews(setVideoNews)
        setLoading(true)
    }

    useEffect(() => {
        getVideoNews()
    }, [])

    const addNews = async () => {
        await AddNews(name,description)
        setName("")
        setDescription("")
    }

    const deleteNews = async () => {
        setLoading(false)
        toast.info("bu ozroq vaqt oladi ozroq kuting")
        await DeleteNews(id);
        setLoading(true)
        await getVideoNews()
    }

    const uploadNewsVd = async () => {
        setLoading(false)
        toast.info("ozroq kuting bu bir ozroq vaqt oladi")
        let rasm = document.getElementById("rasm").files[0]
        const formData = new FormData()
        formData.append("photo", rasm);
        await PhotoUpload(formData);
        const vdId = localStorage.getItem("photoId");
        const res = await axios.put(Base_Url + Apis.news + "/upload/" + localStorage.getItem("newsId") + "?vd=" + vdId)
        toast.success(res.data.message, {position:"top-center"})
        await getVideoNews()
        setLoading(true)
    }

    return(
        <div >
            {loading ? (
                <>
                    <button className={"btn btn-primary"} type={"button"} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Video qo'shish</button>
                    <Carousel responsive={responsive}
                              className={"carouselJon w-100 h-100"}
                    >
                        {videoNews.map((item) => (
                            <>
                                <div className="card mt-3">
                                    <video src={Apis.getContent + item.videoId} controls={true}></video>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">
                                            {item.description}
                                        </p>
                                        <p className="card-text">
                                            <button type={"button"} onClick={() => localStorage.setItem("newsId",item.id)} className={"btn btn-warning btn-block mb-2"} data-bs-toggle="modal" data-bs-target="#uploadNewsVd">Videoni taxrirlash</button>
                                            <button className={"btn btn-block btn-danger mb-2"} onClick={() => setId(item.id)} data-bs-toggle="modal" data-bs-target="#deleteNews">olib tashlash</button>
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </Carousel>
                </>
            ) : (
                <>
                    <Loading/>
                </>
            )}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form action="">
                        <label htmlFor="name" >yangilik nomi</label>
                        <input type="text" className={"form-control mb-3"} id={"name"} name={"name"} placeholder={"yangilik nomini kiriting"} value={name} onChange={e => setName(e.target.value)}/>
                        <label htmlFor="description" >Ushbu yangilik haqida</label>
                        <input type="text" className={"form-control mb-3"} id={"description"} name={"description"} placeholder={"yangilik haqida kiriting"} value={description} onChange={e => setDescription(e.target.value)}/>
                        <button type={"button"} data-bs-toggle="modal" data-bs-target="#uploadNewsVd" className={"btn btn-success"} onClick={() => addNews()}>Saqlash</button>
                    </form>
                </div>
            </div>
            <div className="modal fade" id="uploadNewsVd" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Video joylash </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className={"col-12"} style={{height: '16%', borderStyle: 'dashed'}}>
                                <label className={"w-100 d-flex flex-column"} style={{height: '100%'}}
                                       htmlFor={"rasm"}>
                                    <h2 className={"text-center"}>videoni kiriting</h2>
                                    <i className={"text-center  bi-cloud-upload"}
                                       style={{fontSize: "50px"}}></i>
                                </label>
                                <input  type="file" className={"d-none"} id={"rasm"} name={"rasm"}
                                       data-bs-dismiss={"modal"}
                                       onChange={(e) => uploadNewsVd()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="deleteNews" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Video joylash </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           <h5 className={"text-danger"}>o'chirishni haqiqatdan ham hohlaysizmi</h5>
                        </div>
                        <div className={"modal-footer"}>
                            <button className={"btn btn-secondary"} data-bs-dismiss={"modal"}>close</button>
                            <button className={"btn btn-danger"} data-bs-dismiss={"modal"} type={"button"} onClick={() => deleteNews()}>o'chirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}