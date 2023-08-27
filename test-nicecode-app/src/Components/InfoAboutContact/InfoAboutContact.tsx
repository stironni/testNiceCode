import React from "react";
import style from './style.module.scss';
import foto from '../../assets/images/Rectangle3.png';
import Edit from '../Edit/Edit';

function InfoAboutContact () {

    const fio : string = "Рожков Денис Петрович";
    const age : number = 30;
    const male : string = "муж";

    return (
        <div className={style.contactInfo}>
            <img className={style.foto} alt={fio} src={foto}></img>
            <div>
                <div className={style.fio}>{fio}</div>
                <div className={style.info}>{age} лет, {male}</div> 
            </div>
               <Edit />
        </div>
    )
}

export default InfoAboutContact;