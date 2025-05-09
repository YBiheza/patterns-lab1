export class RectangleService {
    static calculateArea(rectangle) {
        let width;
        let length;
        const xValues = rectangle.vertices.map(v => v.x);
        const yValues = rectangle.vertices.map(v => v.y);
        width = Math.max(...xValues) - Math.min(...xValues);
        length = Math.max(...yValues) - Math.min(...yValues);
        return width * length;
    }
    static calculatePerimetr(rectangle) {
        let width;
        let length;
        const xValues = rectangle.vertices.map(v => v.x);
        const yValues = rectangle.vertices.map(v => v.y);
        width = Math.max(...xValues) - Math.min(...xValues);
        length = Math.max(...yValues) - Math.min(...yValues);
        return (width + length) * 2;
    }
    static isRectangle(rectangle) {
        const points = rectangle.vertices;
        const inZPlane = points.every(point => point.z == 0);
        if (!inZPlane) {
            return false;
        }
        const dist = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        const d1 = dist(rectangle.vertices[0], rectangle.vertices[2]);
        const d2 = dist(rectangle.vertices[1], rectangle.vertices[3]);
        /*const d3 = dist(rectangle.vertices[2], rectangle.vertices[0]);
        const d4 = dist(rectangle.vertices[3], rectangle.vertices[1]);*/
        const side1 = dist(rectangle.vertices[0], rectangle.vertices[1]);
        const side2 = dist(rectangle.vertices[2], rectangle.vertices[3]);
        const side3 = dist(rectangle.vertices[1], rectangle.vertices[2]);
        const side4 = dist(rectangle.vertices[3], rectangle.vertices[0]);
        console.log({ side1, side2, side3, side4, d1, d2 });
        /*if(Math.abs(d1 - d3) < 0.0001 && Math.abs(d2 - d4) < 0.0001) {
            return true
        }
        return false;*/
        const sidesEqual = Math.abs(side1 - side2) < 0.0001 && Math.abs(side3 - side4) < 0.0001;
        const diagonalsEqual = Math.abs(d1 - d2) < 0.0001;
        return sidesEqual && diagonalsEqual;
    }
    static rectangleExists(rectangle) {
        const xValues = rectangle.vertices.map(v => v.x);
        const yValues = rectangle.vertices.map(v => v.y);
        const xCount = {};
        const yCount = {};
        for (let num of xValues) {
            xCount[num] = (xCount[num] || 0) + 1;
            if (xCount[num] > 2) {
                return false;
            }
        }
        for (let num of yValues) {
            yCount[num] = (yCount[num] || 0) + 1;
            if (yCount[num] > 2) {
                return false;
            }
        }
        return true;
    }
    static isSquare(rectangle) {
        let width;
        let length;
        const xValues = rectangle.vertices.map(v => v.x);
        const yValues = rectangle.vertices.map(v => v.y);
        width = Math.max(...xValues) - Math.min(...xValues);
        length = Math.max(...yValues) - Math.min(...yValues);
        if (width == length) {
            return true;
        }
        return false;
    }
    static isRhomb(rectangle) {
        if (RectangleService.isSquare(rectangle)) {
            return true;
        }
        else {
            return false;
        }
    }
}
