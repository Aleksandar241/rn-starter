const fs = require('fs');
const {execSync} = require('child_process');

const iconsDir = './assets/icons';
const icons = {};

fs.readdirSync(iconsDir).forEach(file => {
  if (file.endsWith('.svg')) {
    const iconName = file.toLowerCase().replace('.svg', '').replace('icon', '');
    const iconPath = `require('./${file}').default`;
    icons[iconName] = iconPath;
  }
});

const iconObject = Object.keys(icons).reduce((acc, iconName, index, array) => {
  const iconPath = icons[iconName];
  const comma = index < array.length - 1 ? ',' : '';

  return `${acc}  '${iconName}': ${iconPath}${comma}\n`;
}, 'export const Icons = {\n');

const iconType = '};\n\nexport type IconName = keyof typeof Icons;\n';

const content = iconObject + iconType;

const outputFilePath = `${iconsDir}/index.ts`;

fs.writeFileSync(outputFilePath, content);

try {
  execSync(`npx prettier --write ${outputFilePath}`);
} catch (error) {
  console.error(`Error formatting file with Prettier: ${error}`);
}
