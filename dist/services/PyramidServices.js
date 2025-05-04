//import { RectangleService } from "./RectangleService.ts";
//import { createObject } from "../factories/Factory.ts";
export class PyramidService {
    static calculateArea(pyramid) {
        const xValues = pyramid.vertices.map(v => v.x);
        const zValues = pyramid.vertices.map(v => v.z);
        const foundWidth = Math.max(...xValues) - Math.min(...xValues);
        const foundLength = Math.max(...zValues) - Math.min(...zValues);
        const height = pyramid.apex.y - pyramid.center.y;
        const sq = foundWidth * foundLength;
        const sideAHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(foundLength / 2, 2));
        const sideBHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(foundWidth / 2, 2));
        const fullSquare = ((sideAHeight * foundWidth) / 2 * 2) + ((sideBHeight * foundLength) / 2 * 2) + sq;
        return fullSquare;
    }
    static calculateVolume(pyramid) {
        const xValues = pyramid.vertices.map(v => v.x);
        const zValues = pyramid.vertices.map(t => t.z);
        const foundWidth = Math.max(...xValues) - Math.min(...xValues);
        const foundLength = Math.max(...zValues) - Math.min(...zValues);
        const height = pyramid.apex.y - pyramid.center.y;
        const sq = foundWidth * foundLength;
        const volume = sq * height / 3;
        return volume;
    }
    static calculateVolumeParts(pyramid) {
        const points = [pyramid.apex, pyramid.center, ...pyramid.vertices];
        const axes = ['x', 'y', 'z'];
        for (const axis of axes) {
            const valuesByAxis = points.map(p => p[axis]);
            const positive = valuesByAxis.some(v => v > 0);
            const negative = valuesByAxis.some(v => v < 0);
            if (positive && negative) {
                const height = Math.abs(pyramid.apex.y - pyramid.center.y);
                const apexCoordinate = pyramid.apex[axis];
                const ratio = Math.pow(Math.abs(apexCoordinate) / height, 3);
                let res;
                if (axis === 'y') {
                    res = ratio;
                }
                else {
                    res = 1 - ratio;
                }
                return res;
            }
        }
    }
    static FoundationOnThePlane(pyramid) {
        if (pyramid.center.x == 0 || pyramid.center.y == 0 || pyramid.center.z == 0) {
            return true;
        }
        return false;
    }
    static isValidPyramidShape(pyramid) {
        const isVerticalHeight = pyramid.apex.x === pyramid.center.x &&
            pyramid.apex.z === pyramid.center.z &&
            pyramid.apex.y !== pyramid.center.y;
        if (!isVerticalHeight) {
            return false;
        }
        const baseY = pyramid.vertices[0].y;
        const isBaseFlat = pyramid.vertices.every((v) => v.y === baseY);
        if (!isBaseFlat) {
            return false;
        }
        const middleX = (Math.min(...pyramid.vertices.map((v) => v.x)) +
            Math.max(...pyramid.vertices.map((v) => v.x))) / 2;
        const middleZ = (Math.min(...pyramid.vertices.map((v) => v.z)) +
            Math.max(...pyramid.vertices.map((v) => v.z))) / 2;
        const isCenterCorrect = Math.abs(pyramid.center.x - middleX) < 0.0001 && Math.abs(pyramid.center.z - middleZ) < 0.0001;
        if (!isCenterCorrect) {
            return false;
        }
        const distances = pyramid.vertices.map((v) => Math.sqrt(Math.pow(pyramid.apex.x - v.x, 2) +
            Math.pow(pyramid.apex.y - v.y, 2) +
            Math.pow(pyramid.apex.z - v.z, 2)));
        const isSymmetric = Math.abs(distances[0] - distances[1]) < 0.0001 &&
            Math.abs(distances[2] - distances[3]) < 0.0001;
        if (!isSymmetric) {
            return false;
        }
        return true;
    }
}
