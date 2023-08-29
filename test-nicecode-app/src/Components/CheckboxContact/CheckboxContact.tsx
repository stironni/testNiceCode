import React from "react";
import style from "./style.module.sass";
import favoriteChecked  from "../../assets/icons/check.svg"
import favoriteNoChecked from "../../assets/icons/noCheck.svg"


function CheckboxContact(props : any) {

  let isChecked = props.checked;
  const setIsChecked = (t : boolean) => {
    isChecked = !t
  }

//   console.log(props.onClick);
  
  return (
    <label>
      <input className={style.favoriteCheck}
        type="checkbox"
        onChange={() => {
          setIsChecked(isChecked)
        }}
        onClick={props.onClick ? props.onClick : null}
      />
        <img className={style.checkbox} alt="" src={isChecked ? favoriteChecked : favoriteNoChecked} />
        {props.title}
    </label>
  );
}

export default CheckboxContact;