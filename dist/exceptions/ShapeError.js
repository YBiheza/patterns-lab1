export class ShapeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Shape Error';
    }
}
