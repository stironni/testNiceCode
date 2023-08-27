import React from "react";
import style from "./style.module.scss";
// import activeOnline from "../../assets/icons/Group 10.svg"

function Consultation (props : any) {

    let iconStatus : string = "";
    let frame : string = "";                  

    if (props.statusConsultation === 'activeOnline') {
        iconStatus = [style.icon, style.activeOnline].join(' ');
        frame = [style.main, style.mainActive].join(' ');
    }

    if (props.statusConsultation === 'waitOnline')  {
        iconStatus = [style.icon, style.waitOnline].join(' ');
        frame = [style.main, style.mainWait].join(' ');
    }

    if (props.statusConsultation === 'waitMeet')  {
        iconStatus = [style.icon, style.waitMeet].join(' ');
        frame = [style.main, style.mainWait].join(' ');
    }

    return (
        <div className={frame}>
            <div className={iconStatus}></div>
            <div className={style.textBlock}>
            <div className={style.title}>{props.titleConsultation}</div>
            <div className={style.dateTime}>{props.dateConsultation}, {props.timeStart}-{props.timeEnd}</div>
            </div>
            
            
        </div>
    )
}

export default Consultation;