import {OneWorkerjon} from "../../Service/service.js";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const OneWorker = () => {
    const param = useParams().id
    const [team, setTeam] = useState({})
    const [loading, setLoading] = useState(false)
    const oneWorker = async () => {
        await OneWorkerjon(param, setTeam)
        setLoading(true)
    }

    useEffect(() => {
        oneWorker()
    }, [])
    return(
        <div >
            {loading ? (
                <>
                <div>
                    <section>
                        {team.name}
                    </section>
                </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}