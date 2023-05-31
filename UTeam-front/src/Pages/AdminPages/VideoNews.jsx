import {useEffect, useState} from "react";
import {GetVideoNews} from "../../Service/service.js";
import {Loading} from "../../Component/Loading.jsx";
import Carousel from "react-multi-carousel";
import {Apis} from "../../Service/Auth/Apis.js";

export const VideoNews = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const [name, setName] = useState()
    const [videoNews, setVideoNews] = useState([])
    const [loading, setLoading] = useState(false)
    const getVideoNews = async () => {
        await GetVideoNews(setVideoNews)
        setLoading(true)
    }

    useEffect(() => {
        getVideoNews()
    }, [])

    return(
        <div>
            {loading ? (
                <>
                    <button className={"btn btn-primary"} type={"button"}>Video qo'shish</button>
                    <Carousel responsive={responsive}
                              className={"carouselJon w-100 h-100"}
                    >
                        {videoNews.map((item) => (
                            <>
                                <video controlsList={"nodownload"} className={"vdController mt-2"} controls={true}>
                                    <source  src={Apis.getContent + item.videoId}/>
                                </video>
                            </>
                        ))}
                    </Carousel>
                </>
            ) : (
                <>
                    <Loading/>
                </>
            )}
        </div>
    )
}