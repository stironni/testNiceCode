import React from "react";
import style from "./style.module.sass";
import Consultation from "./Consultation/Consultation";
import { dataConsultations } from "../../DataBase";

function ConsultationList ()  {

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