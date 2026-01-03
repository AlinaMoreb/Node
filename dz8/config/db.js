import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';

// Получаем путь к config.json
const __dirname = path.resolve();
const configPath = path.join(__dirname, 'config', 'config.json');

// Читаем файл и парсим JSON
const raw = fs.readFileSync(configPath);
const config = JSON.parse(raw);

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect
  }
);

export default sequelize;
