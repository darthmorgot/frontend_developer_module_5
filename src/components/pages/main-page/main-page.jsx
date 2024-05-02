import About from '@/components/blocks/about/about.jsx';
import AdvantagesList from '@/components/blocks/advantages-list/advantages-list.jsx';
import TitlePage from '@/components/ui/title-page/title-page.jsx';

/**
 * Компонент главной страницы сайта.
 * @param {object} features Данные (props) для списка преимуществ поступает из PageWrapper.
 * @returns {JSX.Element} Разметка главной страницы.
 * @class
 */
function MainPage({features}) {
  return (
    <>
      <TitlePage namePage={'Главная | Фермерский магазин'}/>
      <About />
      <AdvantagesList features={features}/>
    </>
  );
}

export default MainPage;
