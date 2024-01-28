import React from "react";

function Button({classButton, dataButton, handleButton}) {
  let classBtn = `${classButton} button`;
  return (
    <>
      <a href="#" className={classBtn} data-page={dataButton} onClick={handleButton} tabIndex="0">Купить</a>
    </>
  );
}

export default Button;
