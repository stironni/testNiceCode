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
    setIsCheckedAll: any,
    isSelected : boolean,
    arrayChecks : number[],
    setArrayChecks : any,
    id : number,
    countChecked : number,
    setCountChecked: any,
}
function Contact ({name, 
                   status, 
                   isActive, 
                   img, 
                   hasChecked, 
                   setIsCheckedAll,
                   isSelected, 
                   arrayChecks, 
                   setArrayChecks, 
                   id,
                   countChecked,
                   setCountChecked,}: ContactProps) {

    let [isChecked, setIsChecked] = useState(hasChecked);
    
    let active: string = style.main;

    if (isActive)  active = [style.main, style.selected].join(' ');
    else active = [style.main, style.noSelected].join(' ')

    const setChecked = () => {

        if (isChecked) {
            if (arrayChecks.filter((item : number) => item === id).length === 0) {
                setArrayChecks([...arrayChecks, id]);
                setCountChecked(countChecked + 1);
            }
        } else {
            if (arrayChecks.filter((item : number) => item === id).length > 0) {
                setArrayChecks(arrayChecks.filter((item : number) => item !== id))
                setCountChecked(countChecked - 1);
                setIsCheckedAll(false);
            }
        }
    }

    useEffect(() => {
        setChecked();
    }, [isChecked]);

    // const setCheckedAll = () => {

    //     if (isCheckedAll) {
    //         console.log("hi");
    //         setArrayChecks([...arrayChecks, id]);
    //         setCountChecked(countChecked + 1);
    //         // console.log("есть в массиве",arrayChecks.filter((item : number) => item === id).length > 0);

    //     } else {
    //         setArrayChecks(arrayChecks.filter((item : number) => item !== id))
    //         setIsCheckedAll(false);
    //         // console.log("isCheckedAll", isCheckedAll);
    //         setCountChecked(countChecked - 1);
    //     }
    // }

    // useEffect(() => {
    //     setCheckedAll();
    // }, [isCheckedAll]);


    return (
        <div className={active} onClick={() => {}}>
            {status === 'New' ? <div className={style.mainNew}></div> : ""}
            {isSelected ?<CheckboxContact checked={hasChecked} onClick={() => {setIsChecked(!(hasChecked))}} /> : ""}
            <img className={style.image} src={img ? img : imageEmpty} alt="" />
            <div className={style.name}>{name}</div>
            {status === 'New' ? <div className={style.statusNew}></div> : ""}
            {status === 'Warning' ? <div className={style.statusWarning}></div> : ""}
        </div>
    )
}

export default Contact;
