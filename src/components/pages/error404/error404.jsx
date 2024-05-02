import Title from '@/components/ui/title/title.jsx';
import {TitleLevel, TitleSize} from '@/components/ui/title/title-level-size.js';
import TitlePage from '@/components/ui/title-page/title-page.jsx';
import {TitleErrorWrapper} from './style.js';

/**
 * Компонент страницы с ошибкой 404.
 * @returns {JSX.Element} Разметка страницы.
 * @class
 */
function Error404() {
  return (
    <>
      <TitlePage namePage={'Страница не найдена | Фермерский магазин'}/>
      <TitleErrorWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>Ошибка 404. Страницы не существует.</Title>
      </TitleErrorWrapper>
    </>
  );
}

export default Error404;
