import { Pyramid } from "../entities/pyramid.js";
import { Rectangle } from "../entities/rectangle.js";
export class createObject {
    static createRectangle(id, point1, //[number, number, number],, 
    point2, //[number, number, number],, 
    point3, //[number, number, number],, 
    point4) {
        //const toPoint = ([x, y, z]: [number, number, number]) => new Point(x, y, z);
        return new Rectangle(id, [point1, point2, point3, point4]);
    }
    static createPyramid(id, apex, center, point1, //[number, number, number], 
    point2, //[number, number, number], 
    point3, //[number, number, number], 
    point4) {
        //const toPoint = ([x, y, z]: Point) => new Point(x, y, z);
        return new Pyramid(id, apex, center, [point1, point2, point3, point4]);
    }
}
