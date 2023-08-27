import React from "react";
import style from "./style.module.scss";
import Video from "./Event/Event";

function VideoList ()  {

    interface Event {
        title: string;
        type: string;
        date: string;
        time: string;
        img: string;
    }

    const dataEvents: Event[] = [
        {
            title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
            type: "Вебинар",
            date: "9 марта 2021",
            time: "17:00",
            img: require("../../assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
        },
        {
            title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
            type: "Вебинар",
            date: "9 марта 2021",
            time: "17:00",
            img: require("../../assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
        },
        {
            title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
            type: "Вебинар",
            date: "9 марта 2021",
            time: "17:00",
            img: require("../../assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
        },
        {
            title: "Тяга резинки в шаге со сгибанием локтя под 90 градусов",
            type: "Вебинар",
            date: "9 марта 2021",
            time: "17:00",
            img: require("../../assets/images/events/d40682676472ae98552026199c5eb3b0.png"),
        },

]
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