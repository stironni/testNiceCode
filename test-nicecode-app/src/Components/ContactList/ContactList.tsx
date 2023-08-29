import React, { useState } from "react";
import style from "./style.module.scss";
import Contact from "./Contact/Contact";
import { dataContacts } from "../../DataBase";
import CheckboxContact from "../CheckboxContact/CheckboxContact";

export function CheckedFunc (isCheckedAll : boolean, countChecked : number) : number {
    isCheckedAll ? countChecked = countChecked + 1 : countChecked = countChecked + 0;
    return countChecked;
}

function ContactList () {

    const row : any = [];

    let [isSelected, setIsSelected]  = useState(false);

    const Selected = () => {
        setIsSelected(!isSelected);
    };

    let [isCheckedAll, setIsCheckedAll] = useState(false);

    let [countChecked, setCountChecked]  = useState(0);
    let [countContact, setCountContact] = useState(0);

    // let countChecked : number = 0;
    dataContacts.forEach((dataContact) => {
        row.push(
            <Contact
            name={dataContact.name}
            status={dataContact.status}
            active={dataContact.active}
            img={dataContact.img} 
            isCheckedAll={isCheckedAll}
            isSelected={isSelected}
            countChecked={countChecked}
            // func={() => CheckedFunc(isCheckedAll, countChecked)}
            />
        )

        // console.log("list", isChecked);
        
        countChecked = CheckedFunc(isCheckedAll, countChecked);

        isSelected ?  countContact = 0 : countContact = countContact + 1;
    });

    return (

        isSelected ?
        (
        <>
        <div className={style.mainMenu}>
        <CheckboxContact title="Все" checked={isCheckedAll} onClick={() => {setIsCheckedAll(!isCheckedAll)}} />
            <div className={style.counter}>{countChecked}</div>
            <button className={style.action}>Действия</button>
            <button className={style.cancel} onClick={() => {Selected()}}>Отменить</button>
        </div>
        <div className={style.main}>
             {row}
        </div>
        </>
        )
        :
        (   
        <>
        <div className={style.mainMenu}>
            <div className={style.counter}>{countContact}</div>
            <button className={style.select} onClick={() => {Selected()}}>Выбрать</button>
        </div>
        <div className={style.main}>
             {row}
        </div>
        </>
        )


        
    )
}

export default ContactList;