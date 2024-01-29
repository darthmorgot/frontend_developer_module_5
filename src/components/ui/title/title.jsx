import React from 'react';
import './style.scss';

export const Heading = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3'
};

export const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small',
  EXTRA_SMALL: 'extra-small'
};

function Title({heading, size, children}) {
  switch (heading) {
    case 'h1':
      return <h1 className={`title${size ? ` title--${size}` : ""}`}>{children}</h1>
    case 'h2':
      return <h2 className={`title${size ? ` title--${size}` : ""}`}>{children}</h2>
    case 'h3':
      return <h3 className={`title${size ? ` title--${size}` : ""}`}>{children}</h3>
  }
}

export default Title;
