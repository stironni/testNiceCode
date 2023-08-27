import React from "react";
import style from "./style.module.scss";

function Search () {

    return (
        <div className={style.main}>
            <div className={style.leftIcon}>
                <button className={style.iconSearch}></button>
            </div>
            <div className={style.rightIcon}>
                <button className={style.iconFilter}></button>
                <button className={style.iconPlus}></button>
            </div>

        </div>
    )
}

export default Search;