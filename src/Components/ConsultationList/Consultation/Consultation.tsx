import React from "react";
import style from "./style.module.sass";

type ConsultationProps = {
    titleConsultation : string,
    statusConsultation : 'activeOnline' | 'waitOnline' | 'waitMeet',
    dateConsultation : string,
    timeStart : string,
    timeEnd : string,    
}

function Consultation ({ 
    titleConsultation, 
    statusConsultation, 
    dateConsultation,
    timeStart, 
    timeEnd 
} : ConsultationProps) {

    let iconStatus : string = "";
    let frame : string = "";                  

    if (statusConsultation === 'activeOnline') {
        iconStatus = [style.icon, style.activeOnline].join(' ');
        frame = [style.main, style.mainActive].join(' ');
    }

    if (statusConsultation === 'waitOnline')  {
        iconStatus = [style.icon, style.waitOnline].join(' ');
        frame = [style.main, style.mainWait].join(' ');
    }

    if (statusConsultation === 'waitMeet')  {
        iconStatus = [style.icon, style.waitMeet].join(' ');
        frame = [style.main, style.mainWait].join(' ');
    }

    return (
        <div className={frame}>
            <div className={iconStatus}></div>
            <div className={style.textBlock}>
            <div className={style.title}>{titleConsultation}</div>
            <div className={style.dateTime}>{dateConsultation}, {timeStart}-{timeEnd}</div>
            </div>
            
            
        </div>
    )
}

export default Consultation;