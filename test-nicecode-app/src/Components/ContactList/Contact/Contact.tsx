import React, { useEffect, useState } from "react";
import style from "./style.module.sass";
import CheckboxContact from "../../CheckboxContact/CheckboxContact";
import imageEmpty from "../../../assets/images/contacts/noFoto.png"

type ContactProps = {
    name : string,
    status : 'New' | 'Warning' | '',
    isActive : boolean,
    img : string,
    hasChecked : boolean,
    isCheckedAll : string,
    setIsCheckedAll: any,
    isSelected : boolean,
    arrayChecks : number[],
    setArrayChecks : any,
    id : number,
}

function Contact ({
                    name, 
                    status, 
                    isActive, 
                    img, 
                    hasChecked,
                    isCheckedAll, 
                    setIsCheckedAll,
                    isSelected, 
                    arrayChecks, 
                    setArrayChecks, 
                    id,
                    }: ContactProps) {

    let [isChecked, setIsChecked] = useState(hasChecked);
    
    let active: string = style.main;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ');

    // eslint-disable-next-line
    useEffect(() => {
        setChecked()
    }, [isChecked]); 

    const setChecked = () => {
        if (isChecked) {
            if (arrayChecks.filter((item : number) => item === id).length === 0) {
                setArrayChecks([...arrayChecks, id]);
            }
        } 
        if (!isChecked) {
            if (arrayChecks.filter((item : number) => item === id).length > 0) {
                setArrayChecks(arrayChecks.filter((item : number) => item !== id));
                setIsCheckedAll('once');
            }
        }
    }



    return (
        <div className={active} onClick={() => {}}>
            {status === 'New' ? <div className={style.mainNew}></div> : ""}
            {isSelected ?<CheckboxContact checked={hasChecked} sendClick={() => {setIsChecked(!isChecked)}} /> : ""}
            <img className={style.image} src={img ? img : imageEmpty} alt="" />
            <div className={style.name}>{name}</div>
            {status === 'New' ? <div className={style.statusNew}></div> : ""}
            {status === 'Warning' ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
