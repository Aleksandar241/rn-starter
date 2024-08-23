const fs = require('fs');
const path = require('path');

// eslint-disable-next-line no-undef
const envFilePath = path.resolve(__dirname, '../.env');

const key = 'EXPO_PUBLIC_STORYBOOK';
const value = 'true';

let data = fs.readFileSync(envFilePath, 'utf8');

const updateEnvFile = newData => {
  fs.writeFileSync(envFilePath, newData, 'utf8');
};

const keyPattern = new RegExp(`^${key}=${value}`, 'm');
const keyExists = keyPattern.test(data);

if (keyExists && process.argv[2] === 'clear') {
  data = data.replace(keyPattern, '');
  updateEnvFile(data);
  console.log(`Cleared ${key} from .env file`);
}

if (!keyExists) {
  data += `\n${key}=${value}`;
  updateEnvFile(data);
  console.log(`Added ${key}=${value} to .env file`);
}
