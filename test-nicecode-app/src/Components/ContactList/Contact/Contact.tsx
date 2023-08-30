import React, { useEffect, useState }from "react";
import style from "./style.module.scss";
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
    // countChecked : number,
    // setCountChecked: any,
    // isCheckedAllFlag : boolean,
    // setIsCheckedAllFlag : any,
}
function Contact ({name, 
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
                //    countChecked,
                //    setCountChecked,
                // isCheckedAllFlag,
                // setIsCheckedAllFlag
                }: ContactProps) {

    let [isChecked, setIsChecked] = useState(hasChecked);
    
    let active: string = style.main;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ')

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


    useEffect(() => {
        setChecked();
    }, [isChecked]);


    return (
        <div className={active} onClick={() => {}}>
            {status === 'New' ? <div className={style.mainNew}></div> : ""}
            {isSelected ?<CheckboxContact checked={hasChecked} onClick={() => {setIsChecked(!isChecked)}} /> : ""}
            <img className={style.image} src={img ? img : imageEmpty} alt="" />
            <div className={style.name}>{name}</div>
            {status === 'New' ? <div className={style.statusNew}></div> : ""}
            {status === 'Warning' ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
