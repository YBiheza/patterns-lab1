// logger.ts
import pino from 'pino';
import fs from 'fs';
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
