import {useState} from "react";

export const Messages = () => {

    const [messages, setMessages]=useState([])

    return(
        <div >
            <h1 className={"text-warning text-center"}>Messages</h1>
            <div className={"table-responsive"}>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages.map((item, i) => (
                        <>
                            <tr>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>item.message</td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}