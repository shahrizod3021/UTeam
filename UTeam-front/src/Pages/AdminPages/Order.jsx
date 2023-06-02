import {GetOrder, GetProjects} from "../../Service/service.js";
import {useEffect, useState} from "react";
import {Loading} from "../../Component/Loading.jsx";

export const Order = () => {
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const getOrder = async () => {
        await GetOrder(setOrder)
        setLoading(true)
    }
    useEffect(() => {
        getOrder()
    }, [])
    return(
        <div>
            {loading ? (
                <>
                    <div className={"table-responsive"}>
                        <h1 className={"text-center text-primary"}>Zakazlar ro'yhati</h1>
                        <table className={"table"}>
                            <thead>
                            <tr>
                                <th className={"col-2"}>T/r</th>
                                <th className={"col-2"}>Ismi</th>
                                <th className={"col-2"}>familya</th>
                                <th className={"col-2"}>Telefon raqam</th>
                                <th className={"col-2"}>sabab</th>
                                <th className={"col-2"}>Jarayon</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order.map((item, i)  =>(
                                <>
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.phoneNumber}</td>
                                        {item.why.trim().length > 15 ? (<> <td>{item.why.substring(0, 10)}... <button type={"button"} className={"bg-transparent border-0"} data-bs-toggle="tooltip" data-bs-placement="top"
                                                                                                                      data-bs-custom-class="custom-tooltip"
                                                                                                                      data-bs-title={item.why}><i className={"text-primary bi-eye"}></i></button></td></>) : (<> <td>{item.why}</td></>)}
                                        <td><button className={"bg-transparent border-0 text-danger"}><i className={"bi-trash"}></i></button></td>
                                    </tr>
                                </>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <><Loading/></>
            )}
        </div>
    )
}