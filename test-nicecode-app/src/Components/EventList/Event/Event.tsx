import React from "react";
import style from "./style.module.scss";

function Video (props : any) {



    return (
        <div className={style.main}>
            <img className={style.img} src={props.img}></img>
            <div className={style.textBlock}>
                <div className={style.title}>{props.title}</div>
                <div className={style.secondLine}>
                <div className={style.type}><span className={style.iconType} >{props.type}</span></div>
                    <div className={style.date}><span className={style.iconDate}> {props.date}</span></div>
                    <div className={style.time}><span className={style.iconTime}>{props.time}</span></div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Video;