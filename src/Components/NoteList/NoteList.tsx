import React from "react";
import style from "./style.module.sass";
import Note from "./Note/Note";
import { dataNotes } from "../../DataBase"

function NoteList ()  {
    
    const row : any = [];

    dataNotes.forEach((dataNote) => {
        row.push(
        <Note 
            noteDate={dataNote.date}
            noteText={dataNote.text}
            image={dataNote.img} />
            );
    });

    return(
        <div className={style.main}>
            {row}
        </div>
    );
}

export default NoteList;