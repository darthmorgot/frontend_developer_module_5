import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * Компонент для обнуления скрола при переходе на страницу
 * @returns {null} Ничего не возвращает
 * @constructor
 */
function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
