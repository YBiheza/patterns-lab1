import { Point } from "../entities/point.js";
import { Pyramid } from "../entities/pyramid.js";
import { Rectangle } from "../entities/rectangle.js";

export class createObject {
    static createRectangle (id: string, 
        point1: Point, //[number, number, number],, 
        point2: Point, //[number, number, number],, 
        point3: Point, //[number, number, number],, 
        point4: Point, //[number, number, number],
    ): Rectangle {
        //const toPoint = ([x, y, z]: [number, number, number]) => new Point(x, y, z);
        
        return new Rectangle(id, [point1, point2, point3, point4])
    }

    static createPyramid (
        id: string, 
        apex: Point, 
        center: Point, 
        point1: Point, //[number, number, number], 
        point2: Point, //[number, number, number], 
        point3: Point, //[number, number, number], 
        point4: Point, //[number, number, number]
    ): Pyramid {
        //const toPoint = ([x, y, z]: Point) => new Point(x, y, z);

        return new Pyramid(
            id, apex, center, [point1, point2, point3, point4]
        );
    }
}
