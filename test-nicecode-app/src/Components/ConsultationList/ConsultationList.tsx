import React from "react";
import style from "./style.module.scss";
import Consultation from "./Consultation/Consultation";

function ConsultationList ()  {

    interface dataConsultation {
        titleConsultation: string;
        dateConsultation: string;
        timeStart: string;
        timeEnd: string;
        statusConsultation: string;
    }

    const dataConsultations: dataConsultation[] = [
        {
            titleConsultation: "Online консультация",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'activeOnline',
        },
        {
            titleConsultation: "Online консультация",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'waitOnline',
        },
        {
            titleConsultation: "Личный приём",
            dateConsultation: "15.01.2019",
            timeStart: "12:30",
            timeEnd: "13:00",
            statusConsultation: 'waitMeet',
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

export default ConsultationList;