import React, { useEffect, useState } from "react";
import style from './style.module.scss';

function Edit () {

    const [popupStatus, setPopupStatus] = useState(false);

    const onClickDots = () => {
        setPopupStatus(!popupStatus);
    };

    useEffect(() => {

    }, [popupStatus]);

    return (
        <>
        <button className={style.main} onClick={() => onClickDots()} ></button>
        <div className={popupStatus ? [style.dropDown, style.dropDownShow].join(' ') : [style.dropDown, style.dropDownHide].join(' ')}>
            <button className={style.changeButton} onClick={() => onClickDots()}>Изменить</button>
            <button className={style.deleteButton} onClick={() => onClickDots()}>Удалить</button>
        </div>
        </>
    )
}

export default Edit;