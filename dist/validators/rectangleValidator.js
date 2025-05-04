import { ValidationError } from "../exceptions/validationError.js";
export class RectangleValidator {
    static isValidID(id) {
        if (id !== 'rectangle' && id !== 'pyramid') {
            throw new ValidationError(id, `Wrong ID`);
        }
        return true;
    }
    static validateNumericInput(raw) {
        //const tokens = raw.trim().split(/\s+/);
        const values = raw.map(token => {
            const num = Number(token);
            if (isNaN(num)) {
                throw new ValidationError(String(raw), `недопустимое значение «${token}»`);
            }
            return num;
        });
        return values;
    }
    static validateParameters(points) {
        if (points.length !== 12) {
            throw new ValidationError(String(points.length), `Not enough corners.`);
        }
        return true;
    }
    static validatePointCoordinates(points) {
        points.forEach((point, index) => {
            if (point.length !== 3) {
                throw new ValidationError(String(points.length), `Not enough coordinates.`);
            }
            return true;
        });
    }
    static validateSideLengths(raw, points) {
        const xValues = points.map(p => p.x);
        const yValues = points.map(p => p.y);
        const width = Math.max(...xValues) - Math.min(...xValues);
        const height = Math.max(...yValues) - Math.min(...yValues);
        if (width <= 0 || height <= 0) {
            throw new ValidationError(raw, `невозможно создать прямоугольник с неположительными сторонами`);
        }
    }
}
/*static validateRectangleLine(raw: string): Point[] {
    const values = this.validateNumericInput(raw);
    this.validateCoordinateCount(raw, values);

    const points: Point[] = [];
    for (let i = 0; i < values.length; i += 2) {
      points.push(new Point(values[i], values[i + 1]));
    }

    this.validateSideLengths(raw, points);

    return points;
  }
}*/
