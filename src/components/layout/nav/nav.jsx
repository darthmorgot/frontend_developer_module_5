import React from "react";
import Button from '../../ui/button/button.jsx';

function Nav({page, setPage}) {
  return (
    <nav className="nav">
      {
        page === 'main-page'
          ? <Button classButton={'nav__link'} dataButton={'catalog-page'} handleButton={setPage}>Купить</Button>
          : <a className="nav__link nav__link--home" data-page="main-page" onClick={setPage} tabIndex="0">Главная</a>
      }
    </nav>
  );
}

export default Nav;
