import HiddenTitle from '@/components/ui/hidden-title/hidden-title.jsx';
import AdvantageCard from '@/components/ui/advantage-card/advantage-card.jsx';
import Button from '@/components/ui/button/button.jsx';
import {Section, Slogan, List, ListItem} from './style.js';
import {AppRoute} from '@/AppRoute.js';

/**
 * Компонент блока со списком преимуществ на главной странице.
 * @param {object} features Данные (props) для списка преимуществ поступает из MainPage.
 * @returns {JSX.Element|null} Разметка блока.
 * @class
 */
function AdvantagesList({features}) {
  return features && features.length ? (
    <Section className='wrapper'>
      <HiddenTitle>Преимущества фермерских продуктов</HiddenTitle>
      <Slogan>Почему фермерские продукты лучше?</Slogan>
        <List>
          {features.map(feature => (
            <ListItem key={feature.id}>
              <AdvantageCard {...feature}/>
            </ListItem>
          ))}
        </List>
      <Button classButton={'advantages__link'} link={AppRoute.ORDER} dataButton={'catalog-page'}>Купить</Button>
    </Section>
  ) : null;
}

export default AdvantagesList;
