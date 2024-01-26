import React from 'react';

function ProductSelectionField({products, changed}) {
  const createList = products.map(item => (
      <li className="select-list__item" key={item.id}>
        <label className="select-list__label">
          <span className="select-list__name">{item.content}</span>
          <input type="checkbox" className="select-list__input visually-hidden" name={item.name}
                 checked={item.checked} onChange={e => changed(item.id, e)}/>
          <span className="select-list__mark"></span>
        </label>
      </li>
    )
  );

  return (
    <fieldset className="form__fieldset form__fieldset--select">
      <h3 className="form__title">Выберите продукты</h3>
      <ul className="form__select-list select-list">
        {createList}
      </ul>
    </fieldset>
  );
}

export default ProductSelectionField;
