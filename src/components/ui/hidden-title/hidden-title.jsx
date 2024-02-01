import React from 'react';

function HiddenTitle({children}) {
  return (
    <>
      <h2 className={'visually-hidden'}>{children}</h2>
    </>
  );
}

export default HiddenTitle;
