import React from "react";
import style from "./style.module.scss";
import Edit from "../Edit/Edit";

function Note (props : any) {
    return (
        <div className={style.main}>
            <div className={style.note}>
            <span className={style.date}> {props.noteDate} </span> {props.noteText}
            <br></br>
            {props.image ? <img src={props.image}></img> : ""}
            </div>
            <Edit />
        </div>
    )
}

export default Note;