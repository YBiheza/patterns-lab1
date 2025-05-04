import { Point } from './point.js'

export class Pyramid {
  constructor(
    public readonly id: string,
    public readonly apex: Point, //вершрна
    public readonly center: Point,   
    public readonly vertices: Point[]
  ) {}
}