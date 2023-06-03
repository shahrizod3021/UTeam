import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return(
        <div>
            <h1 className={"text-center text-danger"}>404</h1>
            <h3 className={"text-center text-danger"}>this is not found page</h3>
            <Link to={"/"} className={"btn btn-danger"} style={{margin:"0 auto"}}>Orqaga</Link>
        </div>
    )
}