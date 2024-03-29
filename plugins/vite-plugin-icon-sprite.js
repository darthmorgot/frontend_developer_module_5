import {readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'path';

const PROCESS_CWD = process.cwd();
const PATH_DIR_IMAGES = 'src/assets/img';

/**
 * Плагин для создания спрайта из svg иконок.
 * @returns {{configureServer(*): void, name: string, buildStart(): Promise<void>}} Объект плагина.
 * @class
 */
export default function IconSpritePlugin() {
  /**
   * Асинхронная функция собирает спрайт из svg иконок.
   */
  async function generateIconSprite() {
    const iconsDir = path.resolve(PROCESS_CWD, PATH_DIR_IMAGES);
    const files = await readdir(iconsDir);
    let svgIcons = '';

    for (const file of files) {
      if (!file.endsWith('.svg') || file.startsWith('sprite')) continue;

      let svgContent = await readFile(path.join(iconsDir, file), 'utf8');
      const id = file.replace('.svg', '');

      svgContent = svgContent
        .replace(/id="[^"]+"/, '')
        .replace('<svg', `<svg id="${id}"`);

      svgIcons += svgContent;
    }

    const sprite = `<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style>${svgIcons}</svg>`;

    await writeFile(path.resolve(PROCESS_CWD, PATH_DIR_IMAGES + '/sprite.svg'), sprite);

  }

  return {
    name: 'icon-sprite-plugin',
    buildStart() {
      return generateIconSprite();
    },
    configureServer(server) {
      server.watcher.add(path.resolve(PROCESS_CWD, PATH_DIR_IMAGES + '/*.svg'));
      server.watcher.on('change', async (changedPath) => {
        if (changedPath.endsWith('.svg')) return generateIconSprite();
      });
    },
  };
}
