import {useEffect} from 'react';

/**
 * Компонент для установки названия страницы.
 * @param {string} namePage Данные (props) о названии страницы поступают из места применения.
 * @returns {null} Ничего не возвращает.
 * @class
 */
function TitlePage({namePage}) {
  useEffect(() => {
    document.title = namePage;
  }, [namePage]);

  return null;
}

export default TitlePage;
