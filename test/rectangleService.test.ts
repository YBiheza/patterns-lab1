import { Rectangle } from "../src/entities/rectangle.js";
import { RectangleService } from "../src/services/RectangleService.js";
import { Point } from "../src/entities/point.js";
import { RectangleValidator } from "../src/validators/rectangleValidator.js"


describe ('Rectangle exists', () => {
    it('Checking if the rectangle exists', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(0, 3, 0);
        const p3 = new Point(4, 3, 0);
        const p4 = new Point(4, 0, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])
        const res = RectangleService.rectangleExists(rect);
        expect(res).toBe(true);
    })

    it('rectangle does not exists', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(0, 0, 0);
        const p3 = new Point(0, 3, 0);
        const p4 = new Point(0, 3, 0);
    
        const rect = new Rectangle('rect2', [p1, p2, p3, p4]);
    
        const result = RectangleService.rectangleExists(rect);
        expect(result).toBe(false);
      });
})

describe('rectangle is rectangle', () => {
    it('checking that the rectangle is really rectangle', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(0, 4, 0);
        const p3 = new Point(3, 4, 0);
        const p4 = new Point(3, 0, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRectangle(rect);
        expect(res).toBe(true)
    })

    it('checking that the rectangle is not parallel to Z plane', () => {
        const p1 = new Point(0, 0, 0);
        const p2 = new Point(4, 0, 1);
        const p3 = new Point(4, 3, 0);
        const p4 = new Point(0, 3, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRectangle(rect);
        expect(res).toBe(false)
    })

    it('checking that the pairs of points are on the same lines', () => {
        const p1 = new Point(6, 3, 0);
        const p2 = new Point(4, 3, 0);
        const p3 = new Point(4, 3, 0);
        const p4 = new Point(7, 3, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRectangle(rect);
        expect(res).toBe(false)
    })

    it('checking that there is a distance between all points', () => {
        const p1 = new Point(0, 3, 0);
        const p2 = new Point(4, 3, 0);
        const p3 = new Point(4, 3, 0);
        const p4 = new Point(2, 3, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRectangle(rect);
        expect(res).toBe(false)
    })
})

describe('rectangle perimeter', () => {
    it('checking that the perimeter is 18', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(8, 5, 0);
        const p4 = new Point(8, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.calculatePerimetr(rect);
        expect(res).toBe(18)
        expect(res).toBeGreaterThan(15)
        expect(res).toBeLessThan(20)
    })
})

describe('rectangle area', () => {
    it('checking that the area is 18', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(8, 5, 0);
        const p4 = new Point(8, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.calculateArea(rect);
        expect(res).toBe(18)
        expect(res).toBeGreaterThan(16)
        expect(res).toBeLessThan(19)
    })
})

describe('rectangle is square', () => {
    it('checking that the rectangle is square', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(5, 5, 0);
        const p4 = new Point(5, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isSquare(rect);
        expect(res).toBe(true)
    })

    it('checking that the rectangle is not square', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(6, 5, 0);
        const p4 = new Point(6, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isSquare(rect);
        expect(res).toBe(false)
    })
})

describe('rectangle is rhomb', () => {
    it('checking that the rectangle is rhomb', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(5, 5, 0);
        const p4 = new Point(5, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRhomb(rect);
        expect(res).toBe(true)
    })

    it('checking that the rectangle is not square', () => {
        const p1 = new Point(2, 2, 0);
        const p2 = new Point(2, 5, 0);
        const p3 = new Point(6, 5, 0);
        const p4 = new Point(6, 2, 0);

        const rect = new Rectangle('rect1', [p1, p2, p3, p4])

        const res = RectangleService.isRhomb(rect);
        expect(res).toBe(false)
    })
})