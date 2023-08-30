import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Contact from "./Contact/Contact";
import { dataContacts } from "../../DataBase";
import CheckboxContact from "../CheckboxContact/CheckboxContact";


function ContactList (props : any) {

    let filterText : string = props.text;

    const [arrayChecks, setArrayChecks] = useState([0]);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isSelected, setIsSelected]  = useState(false);
    let [countContact, setCountContact] = useState(0);
    let [countChecked, setCountChecked]  = useState(0);


    const row : any = [];


    const Selected = () => {
        setIsSelected(!isSelected);
        if (isSelected) {         
            setIsCheckedAll(false);
            setArrayChecks([]);
        } else {
            setArrayChecks([]);
        }
            

    };

    dataContacts.forEach((dataContact) => {

    let nameToSearch : string = dataContact.name.toLowerCase();

    if (nameToSearch.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (isCheckedAll)  {
        if (arrayChecks.filter((item : number) => item === dataContact.id).length === 0) {
            let copy : number []= Object.assign([], arrayChecks);
            copy = arrayChecks;
            copy.push(dataContact.id)
            setArrayChecks(copy);
        }
    }

        row.push(
            <Contact
            name={dataContact.name}
            status={dataContact.status}
            isActive={dataContact.active}
            img={dataContact.img} 
            hasChecked={arrayChecks.filter((item : number) => item === dataContact.id).length > 0}
            setIsCheckedAll={setIsCheckedAll}
            isSelected={isSelected}
            arrayChecks={arrayChecks}
            setArrayChecks={setArrayChecks}
            id={dataContact.id}
            countChecked={countChecked}
            setCountChecked={setCountChecked}
            />
        )

        isSelected ?  countContact = 0 : countContact = countContact + 1;
    });

    const checkAll = () => {
        if(isCheckedAll) {
            setIsCheckedAll(false);
            setArrayChecks([]);
        } else {
            setIsCheckedAll(true);
        }
    }
    
    countChecked = arrayChecks.length;
    console.log("arrayChecks",arrayChecks);

    return (

        isSelected ?
        (
        <>
        <div className={style.mainMenu}>
        <CheckboxContact title="Все" checked={isCheckedAll} onClick={() => {checkAll()}} />
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