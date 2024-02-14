import {useEffect} from 'react';

/**
 * Компонент для установки названия страницы
 * @param namePage props Данные о названии страницы поступают из места применения
 * @returns {null} Ничего не возвращает
 * @constructor
 */
function TitlePage({namePage}) {
  useEffect(() => {
    document.title = namePage;
  }, [namePage]);

  return null;
}

export default TitlePage;
