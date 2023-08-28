import React, { useState } from "react";
import style from "./style.module.scss";

function Search () {

    const [isSearch, setIsSearch] = useState(false);

    const isSearchFunc = (t:boolean) =>{
        if(isSearch) setIsSearch(false)
        else setIsSearch(true)
    }

    return (
        isSearch ? 
        (
        <div className={style.mainSearch}>
            <div className={style.divForInput}>
                <div className={style.iconForInput}></div>
                <input className={style.inputWithIcon} type="search" autoFocus/>
            </div>
            <div className={style.rightIcon}>
                <button className={[style.iconClose, style.button].join(' ')} onClick={() => isSearchFunc(isSearch)}></button>
            </div>
        </div>
        )
        :
        (
            <div className={style.mainSearch}>
                <div className={style.leftIcon}>
                    <button className={[style.iconSearch, style.button].join(' ')} onClick={() => isSearchFunc(isSearch)}></button>
                </div>
                <div className={style.rightIcon}>
                    <button className={[style.iconFilter, style.button].join(' ')}></button>
                    <button className={[style.iconPlus, style.button].join(' ')}></button>
                </div>
            </div>
            )
    )
}

export default Search;