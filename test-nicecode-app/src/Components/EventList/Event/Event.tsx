import React from "react";
import style from "./style.module.sass";

type EventProps = {
    title : string,
    type : string,
    date : string
    time : string,
    img : string,
}

function Video ({title, type, date, time, img} : EventProps) {



    return (
        <div className={style.main}>
            <img className={style.img} alt="" src={img}></img>
            <div className={style.textBlock}>
                <div className={style.title}>{title}</div>
                <div className={style.secondLine}>
                <div className={style.type}><span className={style.iconType} >{type}</span></div>
                    <div className={style.date}><span className={style.iconDate}> {date}</span></div>
                    <div className={style.time}><span className={style.iconTime}>{time}</span></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Video;