import React from "react";
import style from "./style.module.sass";
import imgOfChecked  from "../../assets/icons/check.svg"
import imgOfNoCheckedd from "../../assets/icons/noCheck.svg"

type CheckboxProps = {
  title? : string,
  checked : boolean,
  sendClick : () => void,
}

function CheckboxContact({title, checked, sendClick} : CheckboxProps ) {

  let isChecked = checked;
  const setIsChecked = (t : boolean) => {
    isChecked = !t
  }
  
  return (
    <label>
      <input className={style.checked}
        type="checkbox"
        onChange={() => {
          setIsChecked(isChecked)
        }}
        onClick={sendClick}
      />
        <img className={style.checkbox} alt="" src={isChecked ? imgOfChecked : imgOfNoCheckedd} />
        {title}
    </label>
  );
}

export default CheckboxContact;