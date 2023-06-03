import {Sidebar} from "../Component/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {NotFoundPage} from "../Component/NotFoundPage.jsx";

export const AdminLayout = () =>{
    return(
        <div>
            {localStorage.getItem("adminData") === null ? (
                <>
                <NotFoundPage/>
                </>
            ) : (
                <>
                    <Sidebar/>
                    <main style={{marginTop:"58px"}}>
                        <div className={"pt-4"}>
                            <Outlet/>
                        </div>
                    </main>
                </>
            )}

        </div>
    )
}