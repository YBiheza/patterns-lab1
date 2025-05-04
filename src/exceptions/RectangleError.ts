import { ShapeError } from './ShapeError.js';

export class RectangleError extends ShapeError {
  constructor(message: string) {
    super(message);
    this.name = 'Rectangle Error';
  }
}