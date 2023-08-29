import React, { useState }from "react";
import style from "./style.module.scss";
import CheckboxContact from "../../CheckboxContact/CheckboxContact"
import { CheckedFunc } from "../ContactList";

function Contact (props : any) {

    // let isCheckedAll : boolean = props.isChecked;
    // let isChecked : boolean = isCheckedAll;
    const isActive : boolean = props.active;
    const status : string = props.status;
    let isNew : boolean = false;
    let isWarning : boolean = false;
    let active : string = style.main;
    const noImage = require("../../../assets/images/contacts/noFoto.png");

    if (status === "New") isNew = true;

    if (status === "Warning") isWarning = true;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ');

    // console.log("contact1",props.isChecked);

    // console.log("contact2",isChecked);

    // isCheckedAll ? isChecked = true : null;

    let isCheck : boolean = props.isChecked;

    let [isChecked, setIsChecked] = useState(isCheck)

    const setIsCheckedFunc = (t : boolean) => {
        setIsChecked(!t);
    }

    return (
        <div className={active} onClick={() => {}}>
            {isNew ? <div className={style.mainNew}></div> : ""}
            {props.isSelected ?<CheckboxContact checked={isChecked} onClick={() => {setIsCheckedFunc(isChecked)}} /> : ""}
            <img className={style.image} src={props.img ? props.img : noImage} alt="" />
            <div className={style.name}>{props.name}</div>
            {isNew ? <div className={style.statusNew}></div> : ""}
            {isWarning ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
