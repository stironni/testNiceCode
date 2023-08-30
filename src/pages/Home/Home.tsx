import React from 'react';
import style from './style.module.sass';
import InfoAboutContact from '../../Components/InfoAboutContact/InfoAboutContact'
import Tabs from '../../Components/Tabs/Tabs';
import Search from '../../Components/Search/Search';

function Home () {


    return (
        <div className={style.main}>
            <div className={style.leftSide}> 
                <Search />
            </div>
            <div className={style.rightSide}>
                <InfoAboutContact />
                <Tabs />
            </div>
        </div>
    )
} 

export default Home;