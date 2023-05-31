import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./Layout/AdminLayout.jsx";
import {Projects} from "./Pages/AdminPages/Projects.jsx";
import {JoiningToTeam} from "./Pages/AdminPages/JoiningToTeam.jsx";
import {Messages} from "./Pages/AdminPages/Messages.jsx";
import {VideoNews} from "./Pages/AdminPages/VideoNews.jsx";
import {Order} from "./Pages/AdminPages/Order.jsx";
import {Footers} from "./Pages/AdminPages/Footers.jsx";
import {Login} from "./Service/Login.jsx";

export const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth/admin/uTeam/projects"} element={<AdminLayout/>}>
                        <Route index element={<Projects/>}/>
                        <Route path={"/auth/admin/uTeam/projects/joiningToTeam"} element={<JoiningToTeam/>}/>
                        <Route path={"/auth/admin/uTeam/projects/messages"} element={<Messages/>} />
                        <Route path={"/auth/admin/uTeam/projects/videoNews"} element={<VideoNews/>} />
                        <Route path={"/auth/admin/uTeam/projects/orders"} element={<Order/>}/>
                        <Route path={"/auth/admin/uTeam/projects/footers"} element={<Footers/>}/>
                    </Route>
                    <Route path={"/auth/uTeam/login"} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

