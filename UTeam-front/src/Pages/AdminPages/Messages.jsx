import {useEffect, useState} from "react";
import {getMessages} from "../../Service/service.js";
import {Loading} from "../../Component/Loading.jsx";

export const Messages = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

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
                                <th>id</th>
                                <th>name</th>
                                <th>message</th>
                                <th>phoneNumber</th>
                            </tr>
                            </thead>
                            <tbody>
                            {messages.map((item, i) => (
                                <>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.message}</td>
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