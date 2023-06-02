import {MultiStepForm, Step} from 'react-multi-form';
import {useState} from "react";
import {Link} from "react-router-dom";
import {Orderingjon} from "../../Service/service.js";

export const Ordering = () => {
    const [active, setActive] = useState(1)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [personal, setPersonal] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [why, setWhy] = useState('')
    const navigate = useState()
    const ordering = async () => {
        const data = {
            name, lastName, phoneNumber, email, companyName, why
        }
        await Orderingjon(data)
    }
    return (
        <div style={{marginTop: "100px", height: "90vh"}} className={"p-5 "}>
            <MultiStepForm
                activeStep={active}
                accentColor={"blueviolet"}>
                <Step label="Authorization">
                    <form  className={"w-75 "} style={{margin: "0 auto"}}>
                        <input type="text" placeholder={"Ismingizni kiriting"}
                               className={"form-control mb-4 text-center "} id={'name'} name={"name"} value={name} onChange={e => setName(e.target.value)}/>
                        <input type="text" placeholder={"Familynagizni kiriting"}
                               className={"form-control mb-4 text-center"} id={"name"} name={"name"} value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <input type="number" placeholder={"Telefon raqam"} id={"name"} name={'name'} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className={"form-control mb-4 text-center"}/>
                        <input type="email" placeholder={"Email "} id={"email"} name={"email"} value={email} onChange={e => setEmail(e.target.value)} className={"form-control mb-4 text-center"}/>
                    </form>
                    {name.trim().length === 0 || lastName.trim().length === 0 || phoneNumber.trim().length === 0 || email.trim().length === 0  ? (
                        <>
                            <button onClick={() => setActive(2)} style={{float: "right"}}
                                    className={"btn disabled"}>keyingisi
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setActive(2)} style={{float: "right"}}
                                    className={"btn btn-success"}>keyingisi
                            </button>
                        </>
                    )}

                </Step>
                <Step label="Personal question">
                    <form className={"d-flex mb-4"}>
                        <select name="personal" id="personal" className={"form-select w-50 me-2"} value={personal}
                                onChange={e => setPersonal(e.target.value)}>
                            <option value="0" className={"disabled"}>Turni tanlang</option>
                            <option value={"1"}>Shahsiy</option>
                            <option value={"2"}>Kompaniya</option>
                        </select>
                        {personal === "2" ? (
                            <>
                                <input type="text" className={"form-control w-50"} value={companyName}
                                       onChange={e => setCompanyName(e.target.value)}
                                       placeholder={"Companiya nomini kiriting"}/>
                                <textarea cols={10} className={"form-control w-50"} placeholder={"Nima maqsadda"}
                                          value={why} onChange={e => setWhy(e.target.value)}/>
                            </>
                        ) : (
                            <>
                                <textarea cols={10} className={"form-control w-50"} placeholder={"Nima maqsadda"}
                                          value={why} onChange={e => setWhy(e.target.value)}/>
                            </>
                        )}
                    </form>
                    <button onClick={() => setActive(1)} className={"btn btn-secondary"}>orqaga</button>
                    {personal === "0" || why.trim().length === 0 ? (
                        <>
                            <button onClick={() => setActive(3)} style={{float: "right"}}
                                    className={"btn disabled"}>keyingisi
                            </button>

                        </>
                    ) : (
                        <>
                            <button onClick={() => setActive(3)} style={{float: "right"}}
                                    className={"btn btn-success"}>keyingisi
                            </button>
                        </>
                    )}
                </Step>
                <Step label="Finish">
                    <p className={"text-success text-center"}>Sizning ma'lumotlaringiz saqlab qolindi</p>
                    <button onClick={() => setActive(2)} className={"btn btn-secondary"}>orqaga</button>
                    <Link to={"/"} onClick={() => ordering()} style={{float: "right"}}
                          className={"btn btn-success"}>Yakunlash</Link>
                </Step>
            </MultiStepForm>
        </div>

    )
}