import React from "react";
import style from './style.module.sass';
import imgNofoto from '../../assets/images/contacts/noFoto.png';
import Edit from '../Edit/Edit';
import { dataContacts } from "../../DataBase";

function InfoAboutContact () {

    let fio : string = "";
    let age : number = 0;
    let male : 'муж' | 'жен' | '' = '';
    let foto : string = "";

    dataContacts.forEach((dataContact) => {
        if (dataContact.active) {
            fio = dataContact.name;
            age  = dataContact.age;
            male = dataContact.male;
            foto = dataContact.img;
            return;
        }
    })

    return (
        <div className={style.contactInfo}>
            <img className={style.foto} alt={fio} src={foto ? foto : imgNofoto}></img>
            <div>
                <div className={style.fio}>{fio}</div>
                <div className={style.info}>{age} лет, {male}</div> 
            </div>
               <Edit />
        </div>
    )
}

export default InfoAboutContact;