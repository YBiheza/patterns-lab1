import { Point } from "../entities/point.js";
import { Pyramid } from "../entities/pyramid.js";
import { Rectangle } from "../entities/rectangle.js";

export class createObject {
    static createRectangle (id: string, 
        point1: Point, 
        point2: Point, 
        point3: Point, 
        point4: Point,
    ): Rectangle {
        
        return new Rectangle(id, [point1, point2, point3, point4])
    }

    static createPyramid (
        id: string, 
        apex: Point, 
        center: Point, 
        point1: Point, 
        point2: Point,
        point3: Point,
        point4: Point,
    ): Pyramid {
        //const toPoint = ([x, y, z]: Point) => new Point(x, y, z);

        return new Pyramid(
            id, apex, center, [point1, point2, point3, point4]
        );
    }
}
