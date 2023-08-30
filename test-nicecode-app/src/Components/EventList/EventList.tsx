import React from "react";
import style from "./style.module.sass";
import Video from "./Event/Event";
import { dataEvents } from "../../DataBase";

function VideoList ()  {

    const row : any = [];

    dataEvents.forEach((dataEvent) => {
        row.push(
            <Video 
                title={dataEvent.title}
                type={dataEvent.type}
                date={dataEvent.date}
                time={dataEvent.time}
                img={dataEvent.img}
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