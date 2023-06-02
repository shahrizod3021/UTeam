import {Navbar} from "../Component/Navbar.jsx";
import {Outlet} from "react-router-dom";

export const UserLayout = () => {
    return (
        <div>
            <Navbar/>
            <div >
                <Outlet/>
            </div>
        </div>
    )
}