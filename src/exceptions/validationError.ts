import { ShapeError } from './ShapeError.js';

export class ValidationError extends ShapeError {
    constructor(public readonly line: string, reason: string) {
      super(`Invalid input "${line}": ${reason}`);
      this.name = 'ValidationError';
    }
  }