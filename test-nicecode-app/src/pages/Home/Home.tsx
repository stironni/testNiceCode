import React from 'react';
import style from './style.module.scss';
import InfoAboutContact from '../../Components/InfoAboutContact/InfoAboutContact'

function Home () {


    return (
        <div className={style.main}>
            <div className={style.leftSide}> 
                <div className={style.search}>Поиск</div>
                <div className={style.counter}>Счетчик</div>
                <div className={style.contacts}>Список контактов</div>
            </div>
            <div className={style.rightSide}>
                <InfoAboutContact />
                <div className={style.tabs}>Табы</div>   
                <div className={style.infoSelectedTab}>Блок с инфой</div> 
            </div>
        </div>
    )
} 

export default Home;