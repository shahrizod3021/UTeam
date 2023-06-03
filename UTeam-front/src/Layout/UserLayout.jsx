import {Navbar} from "../Component/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {FooterCall} from "../Component/FooterCall.jsx";

export const UserLayout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <FooterCall/>
        </div>
    )
}