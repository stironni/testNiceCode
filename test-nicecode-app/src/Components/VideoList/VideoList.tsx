import React from "react";
import style from "./style.module.scss";
import Video from "./Video/Video";

function VideoList ()  {

    interface dataVidoe {
        title: string;
        autor: string;
        dateStart: string;
        dateEnd: string;
        img: string;
    }

    const dataVideos: dataVidoe[] = [
        {
            title: "Крабик, ходьба в бок в приседе с двумя резинкамиКрабик, ходьба в бок в приседе с двумя резинками",
            autor: "Астахова Е.В.",
            dateStart: "",
            dateEnd: "",
            img: require("../../assets/images/videos/d41f8b8fb98c96042cfe24bc97c143f1.png"),
        },
        {
            title: "Разминка для локтевого сустава",
            autor: "Астахова Е.В.",
            dateStart: "15.01.2019",
            dateEnd: "15.01.2019",
            img: require("../../assets/images/videos/43d4a62bad455bd3151994b9290926c9.png"),
        },
        {
            title: "Разминка для локтевого суставаРазминка для локтевого сустава",
            autor: "Астахова Е.В.",
            dateStart: "15.01.2019",
            dateEnd: "15.01.2019",
            img: require("../../assets/images/videos/5c4758cbb5556daa616abb963b297836.png"),
        },

]
    const row : any = [];

    dataVideos.forEach((dataVideo) => {
        row.push(
            <Video 
                title={dataVideo.title}
                autor={dataVideo.autor}
                dateStart={dataVideo.dateStart}
                dateEnd={dataVideo.dateEnd}
                img={dataVideo.img}
            />
        )
    })


    return(
        <div className={style.main}>
            {row}
        </div>
    );
}

export default VideoList;