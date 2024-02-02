import React from "react";
import {StyleButton} from './style.js';

function Button({classButton, link, dataButton, handleButton, children}) {
  return (
    <StyleButton
      className={classButton ? classButton : null}
      {...(link ? null : {as: 'button'})}
      data-page={dataButton}
      onClick={handleButton}
      tabIndex="0"
    >
      {children}
    </StyleButton>
  );
}

export default Button;
