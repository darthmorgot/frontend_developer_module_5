import {ImagePath, IconSpriteImage} from '@/imageConfig.js';

const PATH_SPRITE_IMAGE = IconSpriteImage[`${ImagePath}sprite.svg`].default;
const ICONS = {
  'icon-eat': PATH_SPRITE_IMAGE + '#icon-eat',
  'icon-garbage': PATH_SPRITE_IMAGE + '#icon-garbage',
  'icon-sprout': PATH_SPRITE_IMAGE + '#icon-sprout',
  'icon-no-meat': PATH_SPRITE_IMAGE + '#icon-no-meat',
};

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
    icon: ICONS['icon-eat'],
    isNegative: false
  },
  {
    id: 1,
    category: 'Магазинные продукты',
    title: 'Просроченные продукты',
    description: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
    icon: ICONS['icon-garbage'],
    isNegative: true
  },
  {
    id: 2,
    category: 'Фермерские продукты',
    title: 'Натуральные продукты',
    description: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
    icon: ICONS['icon-sprout'],
    isNegative: false
  },
  {
    id: 3,
    category: 'Магазинные продукты',
    title: 'Некачественное мясо',
    description: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
    icon: ICONS['icon-no-meat'],
    isNegative: true
  },
];

export default features;
