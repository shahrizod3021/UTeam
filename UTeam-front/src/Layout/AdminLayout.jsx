import {Sidebar} from "../Component/Sidebar.jsx";
import {Outlet} from "react-router-dom";

export const AdminLayout = () =>{
    return(
        <div>
            <Sidebar/>
                <main style={{marginTop:"58px"}}>
                    <div className={"pt-4"}>
                        <Outlet/>
                    </div>
                </main>
        </div>
    )
}