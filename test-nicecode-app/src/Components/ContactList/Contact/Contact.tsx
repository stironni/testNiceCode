import React, { useEffect, useState }from "react";
import style from "./style.module.scss";
import CheckboxContact from "../../CheckboxContact/CheckboxContact"

function Contact (props : any) {

    let [isChecked, setIsChecked] = useState(props.isCheckedAll);
    let isCheckedAll : boolean = props.isCheckedAll;
    const isActive : boolean = props.active;
    const status : string = props.status;
    let isNew : boolean = false;
    let isWarning : boolean = false;
    let active : string = style.main;
    const noImage = require("../../../assets/images/contacts/noFoto.png");

    if (status === "New") isNew = true;

    if (status === "Warning") isWarning = true;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ')

    const setChecked = () => {
        if (isChecked || isCheckedAll) {
            props.setArrayChecks([...props.arrayChecks, props.id]);
        } else {
            props.setArrayChecks(props.arrayChecks.filter((item : any) => item !== props.id))
        }
    }

    useEffect(() => {
        setChecked();
    }, [isChecked]);

    return (
        <div className={active} onClick={() => {}}>
            {isNew ? <div className={style.mainNew}></div> : ""}
            {props.isSelected ?<CheckboxContact checked={isChecked || isCheckedAll} onClick={() => {setIsChecked(!(isChecked))}} /> : ""}
            <img className={style.image} src={props.img ? props.img : noImage} alt="" />
            <div className={style.name}>{props.name}</div>
            {isNew ? <div className={style.statusNew}></div> : ""}
            {isWarning ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
