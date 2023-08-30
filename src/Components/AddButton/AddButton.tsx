import React from "react";
import style from './style.module.sass';

type AddButtonProps = {
    title : string,
}

function AddButton ({ title } : AddButtonProps) {

    return (
        <div className={style.main}>
            <button className={style.button}>{title}</button>
            <button className={style.icon}></button>           
        </div>
        
    )
}

export default AddButton;