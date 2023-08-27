import React from "react";
import style from './style.module.scss';

function AddButton (props : any) {

    return (
        <div className={style.main}>
            <button className={style.button}>{props.title}</button>
            <button className={style.icon}></button>           
        </div>
        
    )
}

export default AddButton;