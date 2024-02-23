import {ImagePath, IconImages} from '@/imageConfig.js';

/**
 * @file Моковые данные для блока преимущев на главной странице.
 * @type {[{isNegative: boolean, icon: string, description: string, id: number, category: string, title: string},{isNegative: boolean, icon: string, description: string, id: number, category: string, title: string},{isNegative: boolean, icon: string, description: string, id: number, category: string, title: string},{isNegative: boolean, icon: string, description: string, id: number, category: string, title: string}]}
 */
const features = [
  {
    id: 0,
    category: 'Фермерские продукты',
    title: 'Еда намного вкуснее',
    description: 'Домашняя колбаса из мяса, соли и специй и колбаса <br/> из магазина — два настолько разных продукта, <br/> что они даже не родственники',
    icon: IconImages[`${ImagePath}icon-eat.svg`].default,
    isNegative: false
  },
  {
    id: 1,
    category: 'Магазинные продукты',
    title: 'Просроченные продукты',
    description: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    icon: IconImages[`${ImagePath}icon-garbage.svg`].default,
    isNegative: true
  },
  {
    id: 2,
    category: 'Фермерские продукты',
    title: 'Натуральные продукты',
    description: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    icon: IconImages[`${ImagePath}icon-sprout.svg`].default,
    isNegative: false
  },
  {
    id: 3,
    category: 'Магазинные продукты',
    title: 'Некачественное мясо',
    description: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    icon: IconImages[`${ImagePath}icon-no-meat.svg`].default,
    isNegative: true
  },
];

export default features;
