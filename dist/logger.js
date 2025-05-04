// logger.ts
import pino from 'pino';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Убедиться, что папка logs существует
const logsDir = path.resolve(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}
// Путь к файлу логов
const logFile = fs.createWriteStream('./logs/app.log', { flags: 'a' });
// Создаём два потока
const streams = [
    { level: 'info', stream: process.stdout },
    { level: 'info', stream: logFile },
];
// Используем pino.multistream (встроенный с v8)
const logger = pino({
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
}, pino.multistream(streams));
export { logger };
