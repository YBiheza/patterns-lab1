import { ShapeError } from "./ShapeError.js";
export class PyramidError extends ShapeError {
    constructor(message) {
        super(message); // вызывает шейп еррор и передает в него месседж
        this.name = 'Pyramid Error';
    }
}
