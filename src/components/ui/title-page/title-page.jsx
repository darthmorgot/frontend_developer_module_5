import {useEffect} from 'react';

/**
 * Компонент для установки названия страницы
 * @param namePage props Данные о названии страницы поступают из места применения
 * @returns {null}
 * @constructor
 */
function TitlePage({namePage}) {
  useEffect(() => {
    document.title = namePage;
  }, []);

  return null;
}

export default TitlePage;