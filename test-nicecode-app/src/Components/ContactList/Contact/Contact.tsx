import React, { useEffect, useState }from "react";
import style from "./style.module.scss";
import CheckboxContact from "../../CheckboxContact/CheckboxContact"

function Contact (props : any) {

    let [isChecked, setIsChecked] = useState(false);
    let isCheckedAll : boolean = props.isCheckedAll;
    isCheckedAll ? isChecked = true : isChecked = false;
    const isActive : boolean = props.active;
    const status : string = props.status;
    let isNew : boolean = false;
    let isWarning : boolean = false;
    let active : string = style.main;
    const noImage = require("../../../assets/images/contacts/noFoto.png");

    const setChecked = () => {
        if (isChecked) {
            props.setCheckArray([...props.checkArray, props.i]);
        }
    }

    if (status === "New") isNew = true;

    if (status === "Warning") isWarning = true;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ')

    const isCheckedFunc = (t:boolean) => {
        setIsChecked(!t);
    }

    useEffect(() => {
        setChecked();
    }, [isChecked]);

    return (
        <div className={active} onClick={() => {}}>
            {isNew ? <div className={style.mainNew}></div> : ""}
            {props.isSelected ?<CheckboxContact checked={isChecked} onClick={() => {isCheckedFunc(isChecked)}} /> : ""}
            <img className={style.image} src={props.img ? props.img : noImage} alt="" />
            <div className={style.name}>{props.name}</div>
            {isNew ? <div className={style.statusNew}></div> : ""}
            {isWarning ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
