import React from "react";
import style from "./style.module.scss";
import Note from "../Note/Note";
import img1 from "../../assets/images/notes/7c229622bcbe6884f7be41a0fd6d814f.png";

function NoteList ()  {

    const dataNotes = [
        {
            date: "20.12.2019",
            text: `Физические упражнения способствуют активизации мышечных сокращений, 
            кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. 
            Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических 
            дефектов в самих мышцах, костной ткани, связках и сухожилиях.`,
            img: "",
        },
        {
            date: "20.12.2019",
            text: `Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических 
            дефектов в самих мышцах, костной ткани, связках и сухожилиях.`,
            img: [img1],
        },
]
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