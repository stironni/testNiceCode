import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import Contact from "./Contact/Contact";
import { dataContacts } from "../../DataBase";
import CheckboxContact from "../CheckboxContact/CheckboxContact";


function ContactList (props : any) {

    let filterText : string = props.text;



    let [arrayChecks, setArrayChecks] = useState([]);

    const row : any = [];

    let [isSelected, setIsSelected]  = useState(false);

    const Selected = () => {
        setIsSelected(!isSelected);
    };

    let [isCheckedAll, setIsCheckedAll] = useState(false);

    // let [countChecked, setCountChecked]  = useState(0);
    let countChecked : number = 0;
    let [countContact, setCountContact] = useState(0);


    dataContacts.forEach((dataContact) => {

    let nameToSearch : string = dataContact.name.toLowerCase();


    if (nameToSearch.indexOf(filterText.toLowerCase()) === -1) {
      return;
    }


        row.push(
            <Contact
            name={dataContact.name}
            status={dataContact.status}
            active={dataContact.active}
            img={dataContact.img} 
            isCheckedAll={isCheckedAll}
            isSelected={isSelected}
            countChecked={countChecked}
            arrayChecks={arrayChecks}
            setArrayChecks={setArrayChecks}
            id={dataContact.id}
            />
        )
        // isCheckedAll ? countChecked = countChecked + 1 : countChecked = countChecked + 0;
        isSelected ?  countContact = 0 : countContact = countContact + 1;
    });



    const AllCheck = () => {
        console.log("AllCheck", arrayChecks.length);
        console.log("AllCheck", arrayChecks);
        if (isCheckedAll) {

        }
            setArrayChecks([]);

    }


    useEffect(() => {
        
    }, [isCheckedAll]);


    countChecked = arrayChecks.length;
    console.log("arrayChecks",arrayChecks);

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