import React from "react";
import style from "./style.module.sass";

type VideoProps = {
    title : string,
    autor : string,
    dateStart : string,
    dateEnd : string,
    img : string,
}

function Video ({
    title, 
    autor, 
    dateStart, 
    dateEnd, 
    img
} : VideoProps) {

    return (
        <div className={style.main}>
            <img className={style.img} alt="" src={img}></img>
            <div className={style.textBlock}>
                <div className={style.title}>{title}</div>
                <div className={style.autorDate}>
                    <div className={style.autor}>{autor}</div>
                    <div className={style.dateTime}> {dateStart}{dateStart && dateEnd ? "-" : ""}{dateEnd}</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Video;