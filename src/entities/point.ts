export class Point {
    x: number;
    y: number;
    z: number;

    constructor (
        public readonly xCoordinate: number, 
        public readonly yCoordinate: number,
        public readonly zCoordinate: number) {
        this.x = xCoordinate;
        this.y = yCoordinate;
        this.z = zCoordinate;
    }
}