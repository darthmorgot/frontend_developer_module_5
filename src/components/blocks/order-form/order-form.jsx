import React from 'react';

function OrderForm() {
  let [checked, setChecked] = React.useState({
    isChecked: true,
    notChecked: false
  });

  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <section className="catalog__order-form order">
      <h2 className="visually-hidden">Форма для заказа товара</h2>
      <form action="#" className="order__form form">
        <fieldset className="form__select">
          <h3 className="form__title">Выберите продукты</h3>
          <ul className="form__select-list select-list">
            <li className="select-list__item">
              <label className="select-list__label">
                <span className="select-list__name">Филе бедра цыпленка</span>
                <input type="checkbox" className="select-list__input test" name="chicken-thigh-fillet"
                       defaultChecked={checked.isChecked} onChange={handleChange}/>
                <span className="select-list__mark">{checked ? 'x' : 'o'}</span>
              </label>
            </li>
            <li className="select-list__item">
              <label className="select-list__label">
                <span className="select-list__name">Филе бедра гуся</span>
                <input type="checkbox" className="select-list__input" name="goose-thigh-fillet"
                       defaultChecked={checked.isChecked} onChange={handleChange}/>
                <span className="select-list__mark">{checked ? 'x' : 'o'}</span>
              </label>
            </li>
            <li className="select-list__item">
              <label className="select-list__label">
                <span className="select-list__name">Мякоть бедра говяжья</span>
                <input type="checkbox" className="select-list__input" name="beef-thigh-flesh"
                       defaultChecked={checked.isChecked} onChange={handleChange}/>
                <span className="select-list__mark">{checked ? 'x' : 'o'}</span>
              </label>
            </li>
            <li className="select-list__item">
              <label className="select-list__label">
                <span className="select-list__name">Грудка цыпленка на кости</span>
                <input type="checkbox" className="select-list__input" name=""
                       defaultChecked={checked.notChecked} onChange={handleChange}/>
                <span className="select-list__mark">{checked ? 'x' : 'o'}</span>
              </label>
            </li>
            <li className="select-list__item">
              <label className="select-list__label">
                <span className="select-list__name">Голень цыпленка</span>
                <input type="checkbox" className="select-list__input" name=""
                       defaultChecked={checked.notChecked} onChange={handleChange}/>
                <span className="select-list__mark">{checked ? 'x' : 'o'}</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset className="form__order">
          <h3 className="form__title">Сделать заказ</h3>
        </fieldset>
      </form>
    </section>
  );
}

export default OrderForm;
