import {Link} from "react-router-dom";
import '../assets/SideBar.css'
export const  Sidebar = () => {
    return(
        <div>
            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <Link
                                to="/auth/admin/uTeam/projects/videoNews"
                                className="list-group-item list-group-item-action py-2 ripple"
                                aria-current="true"
                            >
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Our projects</span>
                            </Link>
                            <Link to="/auth/admin/uTeam/projects/videoNews" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-area fa-fw me-3"></i><span>Video news</span>
                            </Link>
                            <Link to="/auth/admin/uTeam/projects/joiningToTeam" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-lock fa-fw me-3"></i><span>Joining to Team</span></Link
                            >
                            <Link to="/auth/admin/uTeam/projects/messages" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-chart-line fa-fw me-3"></i><span>Messages</span></Link
                            >
                            <Link to="/auth/admin/uTeam/projects/footers" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-chart-line fa-fw me-3"></i><span>Footers</span></Link
                            >
                            <Link to="/auth/admin/uTeam/projects/orders" className="list-group-item list-group-item-action py-2 ripple"
                            ><i className="fas fa-chart-line fa-fw me-3"></i><span>Orders</span></Link
                            >
                        </div>
                    </div>
                </nav>

                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <Link className="navbar-brand" to="/">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="25"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link>
                        <form className="d-none d-md-flex input-group w-auto my-auto">
                            <input
                                autoComplete="off"
                                type="search"
                                className="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)'
                                style={{minWidth: "225px"}}
                            />
                            <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
                        </form>

                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                                    to="/auth/admin/uTeam/projects/messages"
                                    id="navbarDropdownMenuLink"
                                >
                                    <i className="fas fa-bell"></i>
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link me-3 me-lg-0" to="/">
                                    <i className="bi bi-github"></i>
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                    to="/"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                        className="rounded-circle"
                                        height="22"
                                        alt="Avatar"
                                        loading="lazy"
                                    />
                                </Link>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <li>
                                        <Link className="dropdown-item" to="/">My profile</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Settings</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">Logout</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}