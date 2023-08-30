import React from "react";
import style from "./style.module.sass";
import Video from "./Video/Video";
import { dataVideos } from "../../DataBase";

function VideoList ()  {

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