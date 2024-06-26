import {ImagePath, ProductImages} from '@/imageConfig.js';
import productImageWebp1 from 'Images/photo-product-1.jpg?w=248&h=248&format=webp&as=srcset';
import productImageWebp2 from 'Images/photo-product-2.jpg?w=248&h=248&format=webp&as=srcset';
import productImageWebp3 from 'Images/photo-product-3.jpg?w=248&h=248&format=webp&as=srcset';
import productImageWebp4 from 'Images/photo-product-4.jpg?w=248&h=248&format=webp&as=srcset';
import productImageWebp5 from 'Images/photo-product-5.jpg?w=248&h=248&format=webp&as=srcset';

/**
 * @file Моковые данные продуктов для проекта.
 * @type {[{image: {fallback, imageWebp}, features: [{property: string, value: string},{property: string, value: string}], price: number, name: string, about: string, checked: boolean, weight: number, id: number, title: string, spec: [{property: string, value: string},{property: string, value: string},{property: string, value: string},{property: string, value: string}]},{image: {fallback, imageWebp}, features: [{property: string, value: string},{property: string, value: string}], price: number, name: string, about: string, checked: boolean, weight: number, id: number, title: string, spec: [{property: string, value: string},{property: string, value: string},{property: string, value: string},{property: string, value: string}]},{image: {fallback, imageWebp}, features: [{property: string, value: string},{property: string, value: string}], price: number, name: string, about: string, checked: boolean, weight: number, id: number, title: string, spec: [{property: string, value: string},{property: string, value: string},{property: string, value: string},{property: string, value: string}]},{image: {fallback, imageWebp}, features: [{property: string, value: string},{property: string, value: string}], price: number, name: string, about: string, checked: boolean, weight: number, id: number, title: string, spec: [{property: string, value: string},{property: string, value: string},{property: string, value: string},{property: string, value: string}]},{image: {fallback, imageWebp}, features: [{property: string, value: string},{property: string, value: string}], price: number, name: string, about: string, checked: boolean, weight: number, id: number, title: string, spec: [{property: string, value: string},{property: string, value: string},{property: string, value: string},{property: string, value: string}]}]}
 */
const products = [
  {
    id: 0,
    title: 'Филе бедра цыпленка',
    name: 'chicken-thigh-fillet',
    checked: false,
    about: 'Филе бедра без кожи и кости. Птица содержится <br/> в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом <br/> и мясным ароматом.',
    image: {
      fallback: ProductImages[`${ImagePath}photo-product-1.jpg`].default,
      imageWebp: productImageWebp1,
    },
    price: 543,
    weight: 700,
    spec: [
      {
        property: 'Масса',
        value: '0,7 кг. (595-805 г.).'
      },
      {
        property: 'Срок годности',
        value: '6 суток'
      },
      {
        property: 'Порода',
        value: ''
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область'
      }
    ],
    features: [
      {
        property: 'Энергетическая ценность',
        value: '135 ккал./565 кДж.'
      },
      {
        property: 'Пишевая ценность',
        value: 'белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.',
      },
    ]
  },
  {
    id: 1,
    title: 'Филе бедра гуся',
    name: 'goose-thigh-fillet',
    checked: false,
    about: 'Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
    image: {
      fallback: ProductImages[`${ImagePath}photo-product-2.jpg`].default,
      imageWebp: productImageWebp2,
    },
    price: 729,
    weight: 85,
    spec: [
      {
        property: 'Масса',
        value: '85 гр.'
      },
      {
        property: 'Срок годности',
        value: '30 суток'
      },
      {
        property: 'Порода',
        value: ''
      },
      {
        property: 'Место происхождения',
        value: 'Московская облать, Егорьевский район'
      }
    ],
    features: [
      {
        property: 'Энергетическая ценность',
        value: '135 ккал./565 кДж.'
      },
      {
        property: 'Пишевая ценность',
        value: 'белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.',
      },
    ]
  },
  {
    id: 2,
    title: 'Мякоть бедра говяжья',
    name: 'beef-thigh-flesh',
    checked: false,
    about: 'Мякоть бедра - это жестковатое мясо, но очень диетическое и прекрасно подходит для поклонников здорового питания. Мясо можно запечь или потушить с овощами. Все бычки на ферме Эдуарда Васильева выращиваются на натуральном корме.',
    image: {
      fallback: ProductImages[`${ImagePath}photo-product-3.jpg`].default,
      imageWebp: productImageWebp3,
    },
    price: 847,
    weight: 500,
    spec: [
      {
        property: 'Масса',
        value: '0,5 кг. (595-805 г.).'
      },
      {
        property: 'Срок годности',
        value: '7 суток'
      },
      {
        property: 'Порода',
        value: '"Костромская" или "Голштинская".'
      },
      {
        property: 'Место происхождения',
        value: 'Тверская область'
      }
    ],
    features: [
      {
        property: 'Энергетическая ценность',
        value: '137,98 кКал./577,3 кДж.'
      },
      {
        property: 'Пишевая ценность',
        value: 'белки - 20,2 г., жиры - 6,4 г., углеводы - 0 г.; на 100 г.',
      },
    ]
  },
  {
    id: 3,
    title: 'Грудка цыпленка на кости',
    name: 'chicken-breast-on-the-bone',
    checked: false,
    about: 'Мясо грудки считается самым диетическим. Грудку можно отваривать, тушить с овощами, запекать под сыром, обжаривать в соусе. Курицы на ферме Рошаля живут на свободном выгуле и питаются качественным сбалансированным комбикормом, поэтому их мясо мягкое и натуральное.',
    image: {
      fallback: ProductImages[`${ImagePath}photo-product-4.jpg`].default,
      imageWebp: productImageWebp4,
    },
    price: 830,
    weight: 1000,
    spec: [
      {
        property: 'Масса',
        value: '1.00 кг. (0.75-1.25кг.).'
      },
      {
        property: 'Срок годности',
        value: '7 суток'
      },
      {
        property: 'Порода',
        value: 'КОББ 500.'
      },
      {
        property: 'Место происхождения',
        value: 'Краснодарский край, район Славянский.'
      }
    ],
    features: [
      {
        property: 'Энергетическая ценность',
        value: '201 ккал./841 кДж.'
      },
      {
        property: 'Пишевая ценность',
        value: 'белки - 23,6 г., жиры - 1,9 г., углеводы - 0 г.; на 100 г.',
      },
    ]
  },
  {
    id: 4,
    title: 'Голень цыпленка',
    name: 'drumstick-chicken',
    checked: false,
    about: 'Куриные голени – прекрасный выбор для запекания. Мясо получается особенно нежным, сочным и вкусным. Куриные голени считаются диетическим продуктом, но при этом они весьма питательны. Мясо содержит белки, аминокислоты, железо, магний, витамины группы В и А. Идеально сочетание универсальности в приготовлении, пользы для организма и вкусовых качеств! Мясо выращенной на ферме птицы отличается высоким качеством и чистотой состава. Кур выращивают на натуральных кормах без использования антибиотиков и гормонов роста.',
    image: {
      fallback: ProductImages[`${ImagePath}photo-product-5.jpg`].default,
      imageWebp: productImageWebp5,
    },
    price: 400,
    weight: 500,
    spec: [
      {
        property: 'Масса',
        value: '0.5 кг. ( 0.3- 0.7 кг.).'
      },
      {
        property: 'Срок годности',
        value: '7 суток'
      },
      {
        property: 'Порода',
        value: 'КОББ 500.'
      },
      {
        property: 'Место происхождения',
        value: 'Краснодарский край, район Славянский.'
      }
    ],
    features: [
      {
        property: 'Энергетическая ценность',
        value: '210 кКал./836,8 кДж.'
      },
      {
        property: 'Пишевая ценность',
        value: 'белки - 19 г., жиры - 14 г., углеводы - 0 г.; на 100 г.',
      },
    ]
  },
];

export default products;
