import React, { useState } from "react";
import ConsultationList from "../ConsultationList/ConsultationList";
import NoteList from "../NoteList/NoteList";
import style from './style.module.scss';
import VideoList from "../VideoList/VideoList"
import EventList from "../EventList/EventList"

function Tabs () {

    let [activeTab, setActiveTab] = useState('tab1');

    const onClickTab = (num : number) => {
        if (num === 1) setActiveTab('tab1');
        if (num === 2) setActiveTab('tab2');
        if (num === 3) setActiveTab('tab3');
        if (num === 4) setActiveTab('tab4');
    }

    return (
        <>
        <div className={style.main}>
            <button className={activeTab === 'tab1' ? style.tabActive : style.tab} onClick={() => onClickTab(1)}>Заметки</button>
            <div className={style.vLine}></div>
            <button className={activeTab === 'tab2' ? style.tabActive : style.tab} onClick={() => onClickTab(2)}>Консультации</button>
            <div className={style.vLine}></div>
            <button className={activeTab === 'tab3' ? style.tabActive : style.tab} onClick={() => onClickTab(3)}>Видео</button>
            <div className={style.vLine}></div>
            <button className={activeTab === 'tab4' ? style.tabActive : style.tab} onClick={() => onClickTab(4)}>Мероприятия</button>
        </div>
        {activeTab === 'tab1' && <NoteList />}
        {activeTab === 'tab2' && <ConsultationList />}
        {activeTab === 'tab3' && <VideoList />}
        {activeTab === 'tab4' && <EventList />}
        </>
    )
}

export default Tabs;