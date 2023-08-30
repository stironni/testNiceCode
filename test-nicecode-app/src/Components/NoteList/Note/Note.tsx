import React from "react";
import style from "./style.module.sass";
import Edit from "../../Edit/Edit";

type NoteProps = {
    noteDate : string,
    noteText : string,
    image : string,
}

function Note ({noteDate, noteText, image} : NoteProps) {
    return (
        <div className={style.main}>
            <div className={style.note}>
            <span className={style.date}> {noteDate} </span> {noteText}
            <br></br>
            {image ? <img src={image} alt=""></img> : ""}
            </div>
            <Edit />
        </div>
    )
}

export default Note;