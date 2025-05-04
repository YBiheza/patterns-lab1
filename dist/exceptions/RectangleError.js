import { ShapeError } from './ShapeError.js';
export class RectangleError extends ShapeError {
    constructor(message) {
        super(message);
        this.name = 'Rectangle Error';
    }
}
