import React from "react";
import style from "./style.module.scss";

function Video (props : any) {



    return (
        <div className={style.main}>
            <img className={style.img} src={props.img}></img>
            <div className={style.textBlock}>
                <div className={style.title}>{props.title}</div>
                <div className={style.autorDate}>
                    <div className={style.autor}>{props.autor}</div>
                    <div className={style.dateTime}> {props.dateStart}{props.dateStart && props.dateEnd ? "-" : ""}{props.dateEnd}</div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Video;