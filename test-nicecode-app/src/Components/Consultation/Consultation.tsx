import React from "react";
import style from "./style.module.scss";
import activeOnline from "../../assets/icons/Group 10.svg"

function Consultation (props : any) {

    return (
        <div className={style.main}>
            <div className={style.icon}></div>
            <div className={style.title}>{props.titleConsultation}</div>
            <div className={style.dateTime}>{props.dateConsultation}, {props.timeStart}-{props.timeEnd}</div>
            
        </div>
    )
}

export default Consultation;