import { logger } from "../logger.js";
import { ValidationError } from "../exceptions/validationError.js";
import { Point } from "../entities/point.js";

export class PyramidValidator {
    static validateNumericInput(raw: string[]): number[] {
        //const tokens = raw.trim().split(/\s+/);

        const values = raw.map(token => {
            const num = Number(token);
            if (isNaN(num)) {
            throw new ValidationError(String(raw), `недопустимое значение: «${token}»`);
            }
            return num;
        });

        return values;
    }

    static validateParameters (points: number[][]): void {
        if (points.length !== 6) {
            throw new ValidationError(String(points.length), `Not enough corners.`);
        } 
    }

    static validatePointCoordinates(points: number[][]): void {
        points.forEach((point, index) => {
          if (point.length !== 3) {
            throw new ValidationError(String(points.length), `Not enough coordinates.`);
          }
        });
      }

    static validateSideLengths(raw: string, points: Point[]): void {
        const xValues = points.map(p => p.x);
        const yValues = points.map(p => p.y);
    
        const width = Math.max(...xValues) - Math.min(...xValues);
        const height = Math.max(...yValues) - Math.min(...yValues);
    
        if (width <= 0 || height <= 0) {
          throw new ValidationError(raw, `невозможно создать основание с неположительными сторонами`);
        }
    }

    static validateHeight (raw: string, apex: Point, center: Point): void {
        const height = apex.y - center.y;

        if (height <= 0) {
            throw new ValidationError(raw, `пирамида с отрицательной высотой не существует`);
        }
    }

    static isValidCentre (raw: string, points: Point[], center: Point): void {
        const xValues = points.map(p => p.x);
        const yValues = points.map(p => p.y);
    
        const width = Math.max(...xValues) - Math.min(...xValues);
        let minX = Math.min(...xValues);
        const height = Math.max(...yValues) - Math.min(...yValues);
        let minY = Math.min(...yValues);
        if (width / 2 + minX !== center.x || length / 2 + minY !== center.y) {
            throw new ValidationError(raw, `Центр невалидный`);
        }
    }
}