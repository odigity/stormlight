import fs         from 'fs';

const normalizeSvgForName = (filename) => filename.replace(/\.svg$/, '');
const normalizedFileNames = fs.readdirSync('./src/assets/art').map(file => {
    return normalizeSvgForName(file);
});

fs.writeFileSync('./src/cards/artNames.json', JSON.stringify(normalizedFileNames));