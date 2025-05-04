import fs from 'fs'
import * as path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../logger.js';
import { createObject } from '../factories/Factory.js';
import { Rectangle } from '../entities/rectangle.js';
import { Pyramid } from '../entities/pyramid.js';

import { Point } from '../entities/point.js';
import { RectangleValidator } from '../validators/rectangleValidator.js';
import { PyramidValidator } from '../validators/pyramidValidators.js';
import { ValidationError } from '../exceptions/validationError.js';
import { RectangleError } from '../exceptions/RectangleError.js';
import { PyramidError } from '../exceptions/PyramidError.js';

const objects: (Rectangle | Pyramid)[] = [];

/*const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, __filename);*/

export function readFromFile(filePath: string): (Rectangle | Pyramid)[] {
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const cleanedData = rawData.replace(/\r/g, '');
  const lines = cleanedData.trim().split('\n');

  lines.forEach((line, index) => {
    try {
    const parts = line.trim().split(/\s+/);
    RectangleValidator.isValidID(parts[0])
    const figureType = parts[0].toLowerCase();
    const params = parts.slice(1);
    const numericParams = parts.slice(1).map(Number);

    function groupIntoPoints(line: string, arr: number[]): number[][] {
        if (arr.length % 3 !== 0) throw new ValidationError(line, `Invalid point data length ${arr.length}`);
        const result: number[][] = [];
        for (let i = 0; i < arr.length; i += 3) {
          result.push([arr[i], arr[i + 1], arr[i + 2]]);
        }
        return result;
      }

    const nums = groupIntoPoints(line, numericParams)
    const points = nums.map(coords => new Point(coords[0], coords[1], coords[2]));

      switch (figureType) {
        case 'rectangle': {
              //console.log(figureType)
              RectangleValidator.validateNumericInput(params)
              RectangleValidator.validateParameters(numericParams)       
              RectangleValidator.validatePointCoordinates(nums)
              RectangleValidator.validateSideLengths(line, points)
              const rectangle = createObject.createRectangle(parts[0], points[0], points[1], points[2], points[3])
              objects.push(rectangle)
          break;
        }

        case 'pyramid': {
          //console.log(figureType)
              PyramidValidator.validateNumericInput(params)
              PyramidValidator.validateParameters(nums)       
              PyramidValidator.validatePointCoordinates(nums)
              PyramidValidator.validateSideLengths(line, points)
              PyramidValidator.isValidCentre(line, points, points[1])
              PyramidValidator.validateHeight(line, points[0], points[1])
              createObject.createPyramid(parts[0], points[0], points[1], points[2], points[3], points[4], points[5])
              const pyramid = createObject.createPyramid(parts[0], points[0], points[1], points[2], points[3], points[4], points[5])
              objects.push(pyramid)
            break;
        }

        default:
            logger.warn(`Unknown shape`);
    }
    }  catch (err) {
      if (err instanceof ValidationError) {
        logger.warn(`Ошибка в строке ${index + 1}: ${err.message}: "${line}"`);
    } else {
        logger.error(`Непредвиденная ошибка в строке ${index + 1}: "${line}"`, err);
    }
  }
  });
  return objects;
}

//readFromFile(filePath);
