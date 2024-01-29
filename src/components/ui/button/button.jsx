import React from "react";

function Button({classButton, dataButton, handleButton, children}) {
  let classBtn = `${classButton} button`;
  return (
    <>
      <a href="#" className={classBtn} data-page={dataButton} onClick={handleButton} tabIndex="0">{children}</a>
    </>
  );
}

export default Button;
