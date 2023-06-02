import '../assets/templatemo-edu-meeting.css'
import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <div>
            <header className="header-area header-sticky">
                <div className={"container"}>
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="/" className="logo" style={{color:"blueviolet"}}>
                                    UTeam
                                </Link>
                                <ul className="nav">
                                    <li className="scroll-to-section "><a href={"#top"} className="active ">Bosh sahifa</a></li>
                                    <li><a href={"#team"}  className={"text-dark"}>Team</a></li>
                                    <li className="scroll-to-section "><a href={"#projects"} className={"text-dark"}>Proektlar</a></li>
                                    <li className="scroll-to-section">
                                        <a href={"#news"} className={"text-dark"}>yangiliklar</a>
                                    </li>
                                    <li className="scroll-to-section"><a href={"#contact"} className={"text-dark"}>Biz bilan bog'lanish</a></li>
                                    <li className="scroll-to-section"><Link to="/ordering" className={"text-dark"}>Zakaz berish</Link></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}