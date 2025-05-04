import { ShapeError } from './ShapeError.js';
export class ValidationError extends ShapeError {
    constructor(line, reason) {
        super(`Invalid input "${line}": ${reason}`);
        this.line = line;
        this.name = 'ValidationError';
    }
}
