import React, { useState } from "react";
import style from './style.module.sass';
import NoteList from "../NoteList/NoteList";
import ConsultationList from "../ConsultationList/ConsultationList";
import EventList from "../EventList/EventList";
import VideoList from "../VideoList/VideoList";
import AddButton from "../AddButton/AddButton";

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
            <div className={style.tabs}>
                <button className={activeTab === 'tab1' ? style.tabActive : style.tab} onClick={() => onClickTab(1)}>Заметки</button>
                <div className={style.vLine}></div>
                <button className={activeTab === 'tab2' ? style.tabActive : style.tab} onClick={() => onClickTab(2)}>Консультации</button>
                <div className={style.vLine}></div>
                <button className={activeTab === 'tab3' ? style.tabActive : style.tab} onClick={() => onClickTab(3)}>Видео</button>
                <div className={style.vLine}></div>
                <button className={activeTab === 'tab4' ? style.tabActive : style.tab} onClick={() => onClickTab(4)}>Мероприятия</button>
            </div>
            <div className={style.addbutoon}>
                {activeTab === 'tab1' && <AddButton title="Новая заметка" />}
                {activeTab === 'tab2' && <AddButton title="Записать"/>}
                {activeTab === 'tab3' && <AddButton title="Рекомендовать"/>}
                {activeTab === 'tab4' && <AddButton title="Рекомендовать"/>}
            </div>
            </div>
                {activeTab === 'tab1' && <NoteList />}
                {activeTab === 'tab2' && <ConsultationList />}
                {activeTab === 'tab3' && <VideoList />}
                {activeTab === 'tab4' && <EventList />}
        
        </>
    )
}

export default Tabs;