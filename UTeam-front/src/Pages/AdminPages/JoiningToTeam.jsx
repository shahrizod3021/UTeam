import {AddWorker, DeleteNews, DeleteWorker, GetTeam, PhotoUpload} from "../../Service/service.js";
import {useEffect, useState} from "react";
import {Loading} from "../../Component/Loading.jsx";
import {Apis} from "../../Service/Auth/Apis.js";
import {Link} from "react-router-dom";
import axios from "axios";
import {Base_Url} from "../../Service/Base_Url.js";
import {toast} from "react-toastify";
import {resStatus} from "../../Service/Auth/resStatus.js";

export const JoiningToTeam = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    const [edit, setEdit] = useState(true)
    const [projects, setProjects] = useState(Number)
    const getTeam = async () => {
        await GetTeam(setTeam)
        setLoading(true)
    }
    useEffect(() => {
        getTeam()
    }, [])

    const addWorker = async () => {
        const data = {
            name, lastName, phoneNumber, email
        }
        await AddWorker(data)
    }
    const uploadWorkerPhoto = async () => {
        let rasm = document.getElementById("rasm").files[0]
        const formData = new FormData()
        formData.append("photo", rasm);
        await PhotoUpload(formData);
        const photoId = localStorage.getItem("photoId");
        if (id === null) {
            const res = await axios.put(Base_Url + Apis.worker + "/upload/" + localStorage.getItem("workerId") + "?photoId=" + photoId)
            toast.success(res.data.message, {position: "top-center"})
            await getTeam()
        }
        const res = await axios.put(Base_Url + Apis.worker + "/upload/" + id + "?photoId=" + photoId)
        toast.success(res.data.message, {position: "top-center"})
        await getTeam()

    }
    const deleteWorker = async (id) => {
        await DeleteWorker(id)
        await getTeam()
    }

    const editWorker = async (id) => {
        const res = await axios.put(Base_Url + Apis.worker + "/" + id  + "?projects=" + projects)
        setEdit(true)
        if (resStatus(res.status)){
            await getTeam()
            setProjects(0)
            return toast.success(res.data.message, {position: "top-center"})
        }
    }
    const hook = (id) => {
        setEdit(false)
        setId(id);
    }
    return (
        <div>
            {loading ? (
                <>
                    <div>
                        <button className={"btn btn-primary mb-5"} data-bs-toggle="modal"
                                data-bs-target="#addWorker" onClick={() => setId(null)}>Ishchi qo'shish
                        </button>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {team.map((item) => (
                                <>
                                    <div className="col">
                                        <div className="card h-100">
                                            <div className={"card-img-top col-12 bg-image"} style={{height: '50%'}}>
                                                <label className={"w-100 d-flex flex-column hover-zoom"}
                                                       htmlFor={"rasm"}>
                                                    <img style={{height: "30vh"}} src={Apis.getContent + item.photoId}
                                                         alt={item.name} onClick={() => setId(item.id)}/>
                                                </label>
                                                <input type="file" className={"d-none"} id={"rasm"} name={"rasm"}
                                                       onChange={(e) => uploadWorkerPhoto()}/>
                                            </div>
                                            <div className="card-body h-25">
                                                <h5 className="card-title">{item.name} {item.lastName}</h5>
                                                <p className="card-text">
                                                    Telefon raqam: {item.phoneNumber}
                                                </p>
                                                {edit ? (
                                                    <>
                                                        <button onClick={() => hook(item.id)} className={"bg-transparent border-0"}>
                                                            Projectlar soni: {item.projects} ta
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        {item.id === id ? (
                                                            <>
                                                                <form >
                                                                    <input type="number" className={"form-control"} placeholder={item.projects} id={"projects"} name={"projects"} value={projects}  onChange={e => setProjects(e.target.value)}/>
                                                                    {projects === "" ? (
                                                                        <>
                                                                            <button className={"btn btn-sm disabled"} onClick={() => editWorker(item.id)}>taxrirlash</button>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <button className={"btn btn-sm btn-warning"} type={"button"} onClick={() => editWorker(item.id)}>taxrirlash</button>
                                                                        </>
                                                                    )}
                                                                </form>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <button onClick={() => hook(item.id)} className={"bg-transparent border-0"}>
                                                                    Projectlar soni: {item.projects} ta
                                                                </button>
                                                            </>
                                                        )}

                                                    </>
                                                )}

                                            </div>
                                            <div className={"card-footer"}>
                                                <Link to={item.email} className={"link-info me-1"}>Git hub accauntga
                                                    o'tish</Link>
                                                <button className={"btn btn-danger btn-sm"} onClick={() => deleteWorker(item.id)}>olib tashlash</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Loading/>
                </>
            )}
            <div className="modal fade" id="addWorker" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Worker qo'shish</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <label htmlFor="name">Ishchi ismi</label>
                                <input type="text" className={"form-control mb-3"}
                                       placeholder={"Ishchi nomini kiriting"} id={"name"} name={"name"} value={name}
                                       onChange={e => setName(e.target.value)}/>
                                <label htmlFor="lastName">Ishchi familyasi</label>
                                <input type="text" className={"form-control mb-3"}
                                       placeholder={"Ishchi familyasi kiriting"} id={"lastName"} name={"lastName"}
                                       value={lastName} onChange={e => setLastName(e.target.value)}/>
                                <label htmlFor="phoneNumber">Ishchi telefon raqam</label>
                                <input type="text" className={"form-control mb-3"}
                                       placeholder={"Ishchi telefon raqamini kiriting"} id={"phoneNumber"}
                                       name={"phoneNumber"} value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)}/>
                                <label htmlFor="gitHub">Ishchi git hub accaunti</label>
                                <input type="text" className={"form-control mb-2"}
                                       placeholder={"Ishchi git hub accaunti "} id={"gitHub"} name={"gitHub"}
                                       value={email} onChange={e => setEmail(e.target.value)}/>
                            </form>
                        </div>
                        <div className={"modal-footer"}>
                            <button className={"btn btn-secondary"} data-bs-dismiss={"modal"}>close</button>
                            {name.trim().length === 0 || lastName.trim().length === 0 || phoneNumber.trim().length === 0 || email.trim().length === 0 ? (
                                <button className={"btn disabled"} data-bs-toggle={"modal"}
                                        data-bs-target={"#uploadWorkerPhoto"} type={"button"}
                                        onClick={() => addWorker()}>saqlash</button>
                            ) : (
                                <button className={"btn btn-success"} data-bs-toggle={"modal"}
                                        data-bs-target={"#uploadWorkerPhoto"} type={"button"}
                                        onClick={() => addWorker()}>saqlash</button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="uploadWorkerPhoto" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ishchi rasmi</h1>
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
                                <input type="file" className={"d-none"} id={"rasm"} name={"rasm"}
                                       data-bs-dismiss={"modal"}
                                       onChange={(e) => uploadWorkerPhoto()}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}