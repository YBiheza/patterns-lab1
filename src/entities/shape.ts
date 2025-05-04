import { Point } from './point.js'

export abstract class Shape {
    constructor (
        public readonly id: string, 
        public readonly points: Point[])
    {}
}

