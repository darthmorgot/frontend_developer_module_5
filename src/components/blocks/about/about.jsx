import Title from '@/components/ui/title/title.jsx';
import {TitleLevel, TitleSize} from '@/components/ui/title/title-level-size.js';
import {Section, AboutWrapper, TextWrapper, Description} from './style.js';

/**
 * Компонент блока About на главной странице.
 * @returns {JSX.Element} Разметка блока.
 * @class
 */
function About() {
  return (
    <Section>
      <AboutWrapper className="wrapper">
        <TextWrapper>
          <Title level={TitleLevel.H1} size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
          <Description>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за
            день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально
            свежими.</Description>
        </TextWrapper>
      </AboutWrapper>
    </Section>
  );
}

export default About;
