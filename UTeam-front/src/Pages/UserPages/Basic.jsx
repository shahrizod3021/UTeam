import course from '../../assets/coursevideo.mp4'
import Carousel from "react-multi-carousel";
import service from '../../assets/service-icon-01.png'
import meat from '../../assets/meeting-01.jpg'
import {GetProjects, GetTeam, GetVideoNews} from "../../Service/service.js";
import React, {useEffect, useState} from "react";
import {Apis} from "../../Service/Auth/Apis.js";
import {Link} from "react-router-dom";
import {Loading} from "../../Component/Loading.jsx";

export const Basic = () => {
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(false)
    const [projects, setProject] = useState([])
    const [news, setNews] = useState([])


    const myWaiting = () => {
        alert("qozi")
    }
    const getWorker = async () => {
        await GetTeam(setTeam)
        await GetProjects(setProject)
        await GetVideoNews(setNews)
        setLoading(true)
    }
    useEffect(() => {
        getWorker()
    }, [])
    const data = [
        {
            name: "Basic implementation",
            description: "description"
        },
        {
            name: "Basic implementation",
            description: "description"
        },
        {
            name: "Basic implementation",
            description: "description"
        },
        {
            name: "Basic implementation",
            description: "description"
        }, {
            name: "Basic implementation",
            description: "description"
        }, {
            name: "Basic implementation",
            description: "description"
        }
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div>
            {loading ? (
                <>
                    <section className="section main-banner" id="top" data-section="section1">
                        <video autoPlay muted loop id="bg-video">
                            <source src={course} type="video/mp4"/>
                        </video>
                        <div className="video-overlay header-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="caption">
                                            <h6 className={"text-light"}>Salom hammaga </h6>
                                            <h2 className={"text-light"}>Bizning UTeam Companyga hush kelibsiz</h2>
                                            <p>Biz siz kompaniyangizga web site, portfolio, crm system, mobile dasturlar yaratib
                                                beramiz. Yana shu
                                                jumladan web dizayn, telegramda bot va shu kabi turli hil hizmatlarimiz mavjud
                                            </p>
                                            <div className="btn mt-2 bg-violet">
                                                <div className="scroll-to-section"><Link className={"link-light"}
                                                                                         to="/ordering">Hoziroq buyurtma
                                                    bering </Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                        <section className={"services h-50"}>
                            <div className={"container"}>
                                <div className="row">
                                    <div className="col-lg-12 ">
                                        <Carousel responsive={responsive}
                                                  arrows
                                                  autoPlay
                                                  autoPlaySpeed={2000}
                                                  infinite
                                                  minimumTouchDrag={10}

                                        >
                                            {data.map((item) => (
                                                <>
                                                    <div className="item bg-violet me-1">
                                                        <div className="icon">
                                                            <img src={service} alt=""/>
                                                        </div>
                                                        <div className="down-content">
                                                            <h4>{item.name}</h4>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}


                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="upcoming-meetings bg-secondary" id="team">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h2>Bizning jamoa</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="categories  overflow-y-scroll" style={{height: "50vh"}}>
                                            <h4>Jamoa a'zolari</h4>
                                            <ul className={"d-flex flex-column"}>
                                                {team.map((item) => (
                                                    <>
                                                        <li><Link
                                                            to={"/team/ " + `${item.id}`}>{item.name} {item.lastName}</Link>
                                                        </li>
                                                    </>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"col-lg-8"}>
                                        <Carousel responsive={
                                            {
                                                superLargeDesktop: {
                                                    // the naming can be any, depends on you.
                                                    breakpoint: {max: 4000, min: 3000},
                                                    items: 2
                                                },
                                                desktop: {
                                                    breakpoint: {max: 3000, min: 1024},
                                                    items: 2
                                                },
                                                tablet: {
                                                    breakpoint: {max: 1024, min: 464},
                                                    items: 2
                                                },
                                                mobile: {
                                                    breakpoint: {max: 464, min: 0},
                                                    items: 1
                                                }
                                            }
                                        } arrow autoPlay autoPlaySpeed={3000} infinite>
                                            {team.map((item) => (
                                                <>
                                                    <div className="col-lg-11">
                                                        <div className="meeting-item">
                                                            <div className="thumb">
                                                                <a href="meeting-details.html"><img
                                                                    src={Apis.getContent + item.photoId} draggable={false}
                                                                    style={{height: "25vh"}} alt={item.name}/></a>
                                                            </div>
                                                            <div className="down-content">
                                                                <div className="date violet">
                                                                    <h6>Proektlar <br/>soni <span>{item.projects.length}</span>
                                                                    </h6>
                                                                </div>
                                                                <a href="meeting-details.html">
                                                                    <h4>{item.name} {item.lastName}</h4>
                                                                </a>
                                                                <p>Telefon raqam: {item.phoneNumber}</p>
                                                                <div className={"card-footer mt-4"}>
                                                                    <Link to={item.email} className={"violet"}>Git hub accauntga
                                                                        o'tish</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </Carousel>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="our-courses " id="projects">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h2 className={"text-danger"}>Bizning proektlarimiz</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-10">
                                        <div className="owl-courses-item owl-carousel row row-cols-1 row-cols-md-3 g-4 ">
                                            {projects.map((item) => (
                                                <>
                                                    <div className="item">
                                                        <img src={Apis.getContent + item.photoId} draggable={false}
                                                             alt="Course One"/>
                                                        <div className="down-content " style={{height: "25vh"}}>
                                                            <h4>{item.name}</h4>
                                                            <div className="info">
                                                                <div className="row">
                                                                    <div className="col-8">
                                                                        <Link to={item.link} className={"violet"}>ko'rish <i
                                                                            className={"bi-eye"}></i></Link>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        <span className={"text-uppercase"}>{item.who}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id={"news"}>
                            <Carousel responsive={
                                {
                                    superLargeDesktop: {
                                        // the naming can be any, depends on you.
                                        breakpoint: {max: 4000, min: 3000},
                                        items: 1
                                    },
                                    desktop: {
                                        breakpoint: {max: 3000, min: 1024},
                                        items: 1
                                    },
                                    tablet: {
                                        breakpoint: {max: 1024, min: 464},
                                        items: 2
                                    },
                                    mobile: {
                                        breakpoint: {max: 464, min: 0},
                                        items: 1
                                    }
                                }
                            }
                                      arrows={true}
                                      className={"vdCarousel"}
                                      keyBoardControl={false}
                            >
                                {news.map((item) => (
                                    <>
                                        <div className="card w-100">
                                            <video controlsList={"nodownload"} controls playsInline={true}   disableRemotePlayback={true} >
                                                <source  src={Apis.getContent + item.videoId}></source>
                                            </video>
                                            <div className="card-body">
                                                <h1 className="card-title violet text-center">{item.name}</h1>
                                                <p className="card-text text-center">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </Carousel>
                        </section>
                        <section className="contact-us" id="contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 align-self-center">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form id="contact" action="" method="post">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <h2>O'z fikringizni qoldiring   </h2>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <fieldset>
                                                                <input name="name" type="text" id="name"
                                                                       placeholder="ISMINGIZ...*" required=""/>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <fieldset>
                                                                <input name="subject" type="number" id="subject"
                                                                       placeholder="TELEFON RAQAM...*" required=""/>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <fieldset>
                                                        <textarea name="message" type="text" className="form-control"
                                                                  id="message" placeholder="YOUR MESSAGE..."
                                                                  required=""></textarea>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <fieldset>
                                                                <button type="submit" id="form-submit" className="button">SEND
                                                                    MESSAGE NOW
                                                                </button>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-info">
                                            <ul>
                                                <li>
                                                    <h6>Telefon raqam</h6>
                                                    <span>+998 88 *** 06 30</span>
                                                </li>
                                                <li>
                                                    <h6>Email Address</h6>
                                                    <span><small className={"text-light"}>alimirzaaliyevdev@gmail.com</small></span>
                                                </li>
                                                <li>
                                                    <h6>Manzil</h6>
                                                    <span>Qashqadaryo viloyati, Shahrisabz shahar, Koica o'quv markazi</span>
                                                </li>
                                                <li>
                                                    <h6>Website URL</h6>
                                                    <span>www.uTeam.com</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <p>Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
                                    <br/>Design: <a href="https://templatemo.com" target="_parent"
                                                    title="free css templates">TemplateMo</a></p>
                            </div>
                        </section>
                    </div>
                </>
            ) : (
                <><Loading/></>
            )}
        </div>
    )
}