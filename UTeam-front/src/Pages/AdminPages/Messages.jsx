import {useEffect, useState} from "react";
import {getMessages} from "../../Service/service.js";
import {Loading} from "../../Component/Loading.jsx";

export const Messages = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const getAll = async () => {
        try {
            await getMessages(setMessages, setLoading)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    return (
        <div>
            {loading ? (
                <div>
                    <h1 className={"text-warning text-center"}>Messages</h1>
                    <div className={"table-responsive"}>
                        <table className={"table"}>
                            <thead>
                            <tr>
                                <th className={"col-3"}>id</th>
                                <th className={"col-3"}>name</th>
                                <th className={"col-3"}>message</th>
                                <th className={"col-3"}>phoneNumber</th>
                            </tr>
                            </thead>
                            <tbody>
                            {messages.map((item, i) => (
                                <>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.message.trim().length > 15 ? (<>{item.message.substring(0, 15)}... <button type="button" className="bg-transparent border-0"
                                                                                                                          data-bs-toggle="tooltip" data-bs-placement="top"
                                                                                                                          data-bs-custom-class="custom-tooltip"
                                                                                                                          data-bs-title={item.message}><i className={"bi-eye"}></i></button></>) : (<>{item.message}</>)}</td>
                                        <td>{item.phoneNumber}</td>
                                    </tr>
                                </>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ):(
                <Loading/>
            )
            }
        </div>
    )
}