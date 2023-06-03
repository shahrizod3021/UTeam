import {useEffect, useState} from "react";
import {addFooter, deleteMethods, EditFooter, getFooter} from "../../Service/service.js";
import {Loading} from "../../Component/Loading.jsx";
import {Base_Url} from "../../Service/Base_Url.js";
import {Apis} from "../../Service/Auth/Apis.js";

export const Footers = () => {

    const [id, setId] = useState("")
    const [footer, setFooter] = useState([])
    const [name, setName] = useState("")
    const [link, setLink] = useState("")
    const [icon, setIcon] = useState("")
    const [loading, setLoading] = useState(false)

    const data = {
        name, link, icon
    }

    const getAll = async () => {
        try {
            await getFooter(setFooter, setLoading)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const AddFooter = async () => {
        await addFooter(data)
        await getAll()
        setName("")
        setLink("")
        setIcon("")
    }

    const deleteFooter = async (id) => {
        await deleteMethods(Base_Url + Apis.footer, id)
        await getAll()
    }

    const editFooter = async () => {
        await EditFooter(id, data)
        await getAll()
        setName("")
        setIcon("")
        setLink("")
    }

    return (
        <div>
            {loading ? (
                <div>
                    <h1 className={"text-center text-primary"}>Footer qo'shish</h1>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#addFooter">
                        +qoshish
                    </button>

                    <div className="modal fade" id="addFooter" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Footer qo'shing</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            onClick={() => clear()} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="">
                                        <label htmlFor="name" className={"text-primary m-2"}>ism</label>
                                        <input type="text" className={"form-control"} placeholder={"ism"} id={"name"}
                                               name={"name"} onChange={e => setName(e.target.value)}/>
                                        <label htmlFor="link" className={"text-primary m-2"}>link</label>
                                        <input type="text" placeholder={"link"} className={"form-control"} id={"link"}
                                               name={"link"} onChange={e => setLink(e.target.value)}/>
                                        <label htmlFor="icon" className={"text-primary m-2"}>icon</label>
                                        <input type="text" placeholder={"icon"} id={"icon"} name={"icon"}
                                               className={"form-control"} value={icon}
                                               onChange={e => setIcon(e.target.value)}/>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">yopish
                                            </button>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={() => AddFooter()}>qo'shish
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="editFooter" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Footer qo'shing</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            onClick={() => clear()} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form action="">
                                        <label htmlFor="name" className={"text-primary m-2"}>ism</label>
                                        <input type="text" className={"form-control"} placeholder={"ism"} id={"name"}
                                               name={"name"} value={name} onChange={e => setName(e.target.value)}/>
                                        <label htmlFor="link" className={"text-primary m-2"}>link</label>
                                        <input type="text" placeholder={"link"} className={"form-control"} id={"link"}
                                               name={"link"} value={link} onChange={e => setLink(e.target.value)}/>
                                        <label htmlFor="icon" className={"text-primary m-2"}>icon</label>
                                        <input type="text" placeholder={"icon"} id={"icon"} name={"icon"}
                                               className={"form-control"} value={icon}
                                               onChange={e => setIcon(e.target.value)}/>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">yopish
                                            </button>
                                            <button type="button" className="btn btn-warning"
                                                    onClick={() => editFooter()}>Taxrirlash
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={"table-responsive"}>
                        <table className={"table"}>
                            <thead>
                            <tr>
                                <th className={"col-2"}>id</th>
                                <th className={"col-2"}>name</th>
                                <th className={"col-2"}>link</th>
                                <th className={"col-2"}>icon</th>
                                <th className={"col-2"}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {footer.map((item, i) => (
                                <>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.link}</td>
                                        <td>{item.icon}</td>
                                        <td colSpan={2}>
                                            <button className={"btn btn-warning me-1"} onClick={() => setId(item.id)}
                                                    data-bs-toggle="modal" data-bs-target="#editFooter">edit
                                            </button>
                                            <button className={"btn btn-danger"}
                                                    onClick={() => deleteFooter(item.id)}>delete
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <Loading/>
            )}


        </div>
    )
}