import {LoginJon} from "./service.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const loginjon = async () => {
        const data = {
            phoneNumber, password
        }
        await LoginJon(data)
        setTimeout(() => {
            navigate(localStorage.getItem("path"))
        }, 1000)
    }
    return(
        <div>
            <div className={"d-flex align-items-center justify-content-center"} style={{height:"80vh"}}>
                <form action="">
                    <label htmlFor="phoneNumber">Telefon raqam</label>
                    <input type="number" placeholder={"telefon raqamni kiriting"} id={"phoneNumber"} name={"phoneNumber"} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className={"form-control mb-3"}/>
                    <label htmlFor="password">parol</label>
                    <input type="password" placeholder={"parolni kiritng"} id={"password"} name={"password"} value={password} onChange={e => setPassword(e.target.value)} className={"form-control"}/>
                    <button type={"button"} onClick={() => loginjon()}  className={"mt-3 loginBtn text-light"}>login</button>
                </form>
            </div>
        </div>
    )
}