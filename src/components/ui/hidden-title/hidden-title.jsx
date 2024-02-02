import React from 'react';

function HiddenTitle({level, children}) {
  return (
    <>
      {
        level
          ? <h1 className={'visually-hidden'}>{children}</h1>
          : <h2 className={'visually-hidden'}>{children}</h2>
      }
    </>
  );
}

export default HiddenTitle;
