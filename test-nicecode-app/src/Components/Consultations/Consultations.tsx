import React from "react";
import style from "./style.module.scss";
import Consultation from "../Consultation/Consultation";

function Consultations ()  {

    const dataConsultations = [
        {
            titleConsultation: "Online консультация",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'active',
        },
        {
            titleConsultation: "Online консультация",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'wait',
        },
        {
            titleConsultation: "Личный приём",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'wait',
        },

]
    const row : any = [];

    dataConsultations.forEach((dataConsultation) => {
        row.push(
            <Consultation 
                titleConsultation={dataConsultation.titleConsultation}
                dateConsultation={dataConsultation.dateConsultation}
                timeStart={dataConsultation.timeStart}
                timeEnd={dataConsultation.timeEnd}
                statusConsultation={dataConsultation.statusConsultation}
            />
        )
    })


    return(
        <div className={style.main}>
            {row}
        </div>
    );
}

export default Consultations;