import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminLayout} from "./Layout/AdminLayout.jsx";
import {Projects} from "./Pages/AdminPages/Projects.jsx";
import {JoiningToTeam} from "./Pages/AdminPages/JoiningToTeam.jsx";
import {Messages} from "./Pages/AdminPages/Messages.jsx";
import {VideoNews} from "./Pages/AdminPages/VideoNews.jsx";
import {Order} from "./Pages/AdminPages/Order.jsx";
import {Footers} from "./Pages/AdminPages/Footers.jsx";
import {Login} from "./Service/Login.jsx";
import {UserLayout} from "./Layout/UserLayout.jsx";
import {Basic} from "./Pages/UserPages/Basic.jsx";
import {OneWorker} from "./Pages/UserPages/OneWorker.jsx";
import {Ordering} from "./Pages/UserPages/Ordering.jsx";
import {NotFoundPage} from "./Component/NotFoundPage.jsx";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth/admin/uTeam/projects"} element={<AdminLayout/>}>
                        <Route index element={<Projects/>}/>
                        <Route path={"/auth/admin/uTeam/projects/joiningToTeam"} element={<JoiningToTeam/>}/>
                        <Route path={"/auth/admin/uTeam/projects/messages"} element={<Messages/>}/>
                        <Route path={"/auth/admin/uTeam/projects/videoNews"} element={<VideoNews/>}/>
                        <Route path={"/auth/admin/uTeam/projects/orders"} element={<Order/>}/>
                        <Route path={"/auth/admin/uTeam/projects/footers"} element={<Footers/>}/>
                    </Route>
                        <Route path={"/"} element={<UserLayout/>}>
                            <Route index element={<Basic/>}/>
                            <Route path={"/team/:id"} element={<OneWorker/>}/>
                            <Route path={"/ordering"} element={<Ordering/>}/>
                        </Route>
                        <Route path={"/auth/uTeam/login"} element={<Login/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
)
}

