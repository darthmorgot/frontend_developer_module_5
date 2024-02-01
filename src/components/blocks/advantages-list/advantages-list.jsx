import React from 'react';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import AdvantageCard from '../../ui/advantage-card/advantage-card.jsx';
import Button from '../../ui/button/button.jsx';
import {Section, Slogan, List, ListItem} from './style.js';

function AdvantagesList({setPage, features}) {
  return features && features.length ? (
    <Section className="wrapper">
      <HiddenTitle>Преимущества фермерских продуктов</HiddenTitle>
      <Slogan>Почему фермерские продукты лучше?</Slogan>
        <List>
          {features.map(feature => (
            <ListItem key={feature.id}>
              <AdvantageCard {...feature}/>
            </ListItem>
          ))}
        </List>
      <Button classButton={'advantages__link'} link dataButton={'catalog-page'} handleButton={setPage}>Купить</Button>
    </Section>
  ) : null;
}

export default AdvantagesList;
