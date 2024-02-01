import React from 'react';
import Title, {TitleSize, TitleLevel} from '../../ui/title/title.jsx';

function ProductSelectionField({goods, changed}) {
  const createList = goods && goods.length ? goods.map(item => (
      <li className="select-list__item" key={item.id}>
        <label className="select-list__label">
          <span className="select-list__name">{item.content}</span>
          <input type="checkbox" className="select-list__input visually-hidden" name={item.name}
                 checked={item.checked} onChange={e => changed(item.id, e)}/>
          <span className="select-list__mark"></span>
        </label>
      </li>
    )
  ) : null;

  return (
    <fieldset className="form__fieldset form__fieldset--select">
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Выберите продукты</Title>
      <ul className="form__select-list select-list">
        {createList}
      </ul>
    </fieldset>
  );
}

export default ProductSelectionField;
