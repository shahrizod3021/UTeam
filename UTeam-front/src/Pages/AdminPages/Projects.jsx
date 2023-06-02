import {AddProjects, GetProjects, PhotoUpload} from "../../Service/service.js";
import {useEffect, useState} from "react";
import {Loading} from "../../Component/Loading.jsx";
import {Apis} from "../../Service/Auth/Apis.js";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {Base_Url} from "../../Service/Base_Url.js";

export const Projects = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [who, setWho] = useState('')
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    const
    getProjects = async () => {
        await GetProjects(setProjects)
        setLoading(true)

    }
    useEffect(() => {
        getProjects()
    }, [])
    const addProject = async () => {
        await AddProjects(name, description, link, who)
        setName("")
        setLink("")
        setWho("")
        setDescription("")
    }
    const uploadProjectPhoto = async () => {
        setLoading(false)
        let rasm = document.getElementById("rasm").files[0]
        const formData = new FormData()
        formData.append("photo", rasm);
        await PhotoUpload(formData);
        const photoId = localStorage.getItem("photoId");
        const res = await axios.put(Base_Url + Apis.projects + "/upload/" + localStorage.getItem("projectId") + "?photoId=" + photoId)
        toast.success(res.data.message, {position:"top-center"})
        setLoading(true)
        getProjects()
    }

    return (
        <div>
            {loading ? (
               <>
                   <div className={"mt-4"}>
                       <button className={"btn btn-primary"} type={"button"} data-bs-toggle="modal" data-bs-target="#addProject" style={{float: "right"}}>project ulashish</button>
                       <div className="row row-cols-1  row-cols-md-3 g-4">
                           {projects.map((item) => (
                               <>
                                   <div className="col">
                                       <div className="card h-100">
                                           <img src={Apis.getContent + item.photoId}
                                                className="card-img-top" alt={item.name} height={"300vh"}/>
                                           <div className="card-body">
                                               <h5 className="card-title">{item.name}</h5>
                                               <p className="card-text">
                                                   {item.description}
                                               </p>
                                               <p className="card-text">
                                                   kimga: {item.who}
                                               </p>
                                           </div>
                                           <div className={"card-footer"}>
                                                <Link to={item.link} className={"link-info"}>ko'rish</Link>
                                           </div>
                                       </div>
                                   </div>
                               </>
                           ))}
                       </div>
                   </div>
               </>
            ) : (
             <><Loading/></>
            )}
            <div className="modal fade" id="addProject" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Project qo'shish</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label htmlFor="name">Project nomini</label>
                                <input type="text" className={"form-control mb-3"} placeholder={"Project nomini kiriting"} id={"name"} name={"name"} value={name} onChange={e => setName(e.target.value)}/>
                                <label htmlFor="link">Project linki</label>
                                <input type="text" className={"form-control mb-3"} placeholder={"Project linkini kiriting"} id={"link"} name={"link"} value={link} onChange={e => setLink(e.target.value)}/>
                                <label htmlFor="description">Project haqida</label>
                                <input type="text" className={"form-control mb-3"} placeholder={"Project haqida ozroq ma'lumot"} id={"description"} name={"description"} value={description} onChange={e => setDescription(e.target.value)}/>
                                <label htmlFor="who">Project kimga</label>
                                <input type="text" className={"form-control mb-2"} placeholder={"Project kimga yoki qaysi companyga "} id={"who"} name={"who"} value={who} onChange={e => setWho(e.target.value)}/>
                            </form>
                        </div>
                        <div className={"modal-footer"}>
                            <button className={"btn btn-secondary"} data-bs-dismiss={"modal"}>close</button>
                            {name.trim().length === 0 || link.trim().length === 0  || description.trim().length === 0 || who.trim().length === 0 ? (
                                <button className={"btn disabled"} data-bs-toggle={"modal"} data-bs-target={"#uploadProjectPhoto"}  type={"button"} onClick={() => addProject()}>saqlash</button>
                            ) : (
                                <button className={"btn btn-success"} data-bs-toggle={"modal"} data-bs-target={"#uploadProjectPhoto"}  type={"button"} onClick={() => addProject()}>saqlash</button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="uploadProjectPhoto" tabIndex="-1" aria-labelledby="exampleModalLabel"
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
                                    <h2 className={"text-center"}>rasmni saqlang</h2>
                                    <i className={"text-center  bi-cloud-upload"}
                                       style={{fontSize: "50px"}}></i>
                                </label>
                                <input  type="file" className={"d-none"} id={"rasm"} name={"rasm"}
                                        data-bs-dismiss={"modal"}
                                        onChange={(e) => uploadProjectPhoto()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}