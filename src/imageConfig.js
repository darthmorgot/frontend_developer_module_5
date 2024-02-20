/**
 * Константа, задающая путь до папки с картинками.
 * @type {string}
 */
export const ImagePath = '/src/assets/img/';

/**
 * Константа, задающая импорт картинок с иконками.
 * @type {Record<string, unknown>}
 */
export const IconImages = import.meta.glob(['Images/icon-*.svg'], {eager: true});

/**
 * Константа, задающая импорт картинок товаров.
 * @type {Record<string, unknown>}
 */
export const ProductImages = import.meta.glob(['Images/*.jpg', 'Images/*.webp'], {eager: true});
