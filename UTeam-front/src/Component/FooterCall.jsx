import {useEffect, useState} from "react";
import {getFooter} from "../Service/service.js";
import {Link} from "react-router-dom";

export const FooterCall = () => {

    const [footer, setFooter] = useState([])

    const getAll = async () => {
        try {
            await getFooter(setFooter)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    return (
        <footer className="text-center text-lg-start bg-white text-muted bg-dark">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-black">
                <div className="me-5 d-none d-lg-block">
                    <span>Bizga ijtimoiy tarmoq orqali ulaning:</span>
                </div>
                <div>
                    {footer.map((item)=>(
                        <Link to={item.link} className={"me-2"} style={{fontSize:'25px', color:'white'}}><i className={item.icon}></i></Link>
                    ))}
                </div>
            </section>

            <section className="bg-black">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-light mt-3">
                                <i className="fas fa-gem me-3 text-secondary"></i>uTeam
                            </h6>
                            <p className={"text-light"}>
                                Bu UTeam vebsayti qaysiki UTeam proyektlarini ko'rsatadi va biz haqimizdagi malimot
                                yozilgan. Va bu vebsaytdan zakaz oslsa buladi
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-light mt-3">
                                Foydali linklar
                            </h6>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <>
                                    {footer.map((item) => (
                                        <>
                                            {item.name.startsWith("+998")|| item.name.endsWith("@gmail.com")?(
                                                    <>
                                                    </>
                                                ):(
                                                    <>
                                                        <Link to={item.link} className={"text-light"}>{item.name}</Link>
                                                    </>
                                            )

                                            }
                                        </>

                                    ))}
                                </>

                            </div>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4 text-light mt-3">Ijtimoiy tarmoq</h6>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                {footer.map((item)=>(
                                    <>
                                        {item.name.startsWith("+998")||item.name.endsWith("@gmail.com") ? (
                                            <>
                                                <p className={"text-light"}><i className={item.icon}> {item.name}</i></p>
                                            </>
                                        ):(
                                            <></>
                                        )
                                        }
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{backgroundColor: "black"}}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#">uteam.com</a>
            </div>
        </footer>
    )
}