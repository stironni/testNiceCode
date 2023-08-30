import React, { useState } from "react";
import style from "./style.module.sass";
import Contact from "./Contact/Contact";
import { dataContacts } from "../../DataBase";
import CheckboxContact from "../CheckboxContact/CheckboxContact";

type ContactListProps = {
    text : string,
}

function ContactList ({text} : ContactListProps) {

    let filterText : string = text;

    const [arrayChecks, setArrayChecks] = useState<number[]>([]);
    const [isCheckedAll, setIsCheckedAll] = useState('none');
    const [isSelected, setIsSelected]  = useState(false);
    let countContact : number = 0;
    let countChecked : number = 0;

    const row : any = [];

    const Selected = () => {
        setIsSelected(!isSelected);
        setArrayChecks([]);
        setIsCheckedAll('none');
    }

    dataContacts.forEach((dataContact) => {

        let nameToSearch : string = dataContact.name.toLowerCase();

        if (nameToSearch.indexOf(filterText.toLowerCase()) === -1) {
        return;
        }

        if (isCheckedAll === 'all') {
            if (arrayChecks.filter((item : number) => item === dataContact.id).length === 0) {
                setArrayChecks([...arrayChecks, dataContact.id])
            }
        }

        row.push(
            <Contact
            name={dataContact.name}
            status={dataContact.status}
            isActive={dataContact.active}
            img={dataContact.img} 
            id={dataContact.id}
            hasChecked={arrayChecks.filter((item : number) => item === dataContact.id).length > 0}
            isCheckedAll={isCheckedAll}
            setIsCheckedAll={setIsCheckedAll}
            isSelected={isSelected}
            arrayChecks={arrayChecks}
            setArrayChecks={setArrayChecks}
            />
        )

        isSelected ?  countContact = 0 : countContact = countContact + 1;
    });

    const CheckedAllFunc = () => {
        if (isCheckedAll === 'once' || isCheckedAll === 'all') {
            setIsCheckedAll('none');
            setArrayChecks([]);
        }
        if (isCheckedAll === 'once' || isCheckedAll === 'none')
            setIsCheckedAll('all');
    }
    
    countChecked = arrayChecks.length;

    return (

        isSelected ?
        (
        <>
        <div className={style.mainMenu}>
        <CheckboxContact title="Все" checked={isCheckedAll === 'all' ? true : false} sendClick={() => {CheckedAllFunc()}} />
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