import { Point } from './point.js'

export class Rectangle {
    constructor(
        public readonly id: string,
        public readonly vertices: Point[],
    ) {}
}