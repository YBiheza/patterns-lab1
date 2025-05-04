import { Pyramid } from "../src/entities/pyramid.js";
import { PyramidService } from "../src/services/PyramidServices.js";
import { Point } from "../src/entities/point.js";
import { PyramidValidator } from "../src/validators/pyramidValidators.js"

describe ('pyramid is pyramid', () => {
    it('checking if the height is parallel to Y axis', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(true);
    })

    it('checking if the height is not parallel to Y axis', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (3, 10, 5)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(false);
    })

    it('checking if the center is really in the center', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(true);
    })

    it('checking if the center is not in the center', () => {
        const center = new Point (6, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(false);
    })

    it('checking if all base point are on the same plane', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(true);
    })

    it('checking if all base point are not on the same plane', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 1, 5);
        const p3 = new Point(9, 4, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(false);
    })

    it('checking if the distance between points exists', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(true);
    })

    it('checking if the distance between points exists', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(true);
    })

    it('checking if the distance between points does not exists', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 1);
        const p3 = new Point(7, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.isValidPyramidShape(pyram)
        expect(res).toBe(false);
    })
})

describe ('pyramid base is parallel to X axis', () => {
    it('checking if the base is on the X axis plane', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.FoundationOnThePlane(pyram)
        expect(res).toBe(true);
    })

    it('checking if the base is not on the X axis plane', () => {
        const center = new Point (5, 1, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 1, 1);
        const p2 = new Point(1, 1, 5);
        const p3 = new Point(9, 1, 5);
        const p4 = new Point(9, 1, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.FoundationOnThePlane(pyram)
        expect(res).toBe(false);
    })
})

describe ('square of the face', () => {
    it('checking if the area of the pyramid face is 156.665632', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.calculateArea(pyram)
        expect(res).toBe(32 + (Math.sqrt(116)*4) + (Math.sqrt(104)*8));
        expect(res).toBeGreaterThan(155);
        expect(res).toBeLessThan(158);
    })
})

describe ('volume of the pyramid', () => {
    it('checking if the volume of the pyramid is 320/3', () => {
        const center = new Point (5, 0, 3)
        const apex = new Point (5, 10, 3)
        const p1 = new Point(1, 0, 1);
        const p2 = new Point(1, 0, 5);
        const p3 = new Point(9, 0, 5);
        const p4 = new Point(9, 0, 1);

        const pyram = new Pyramid('py1', apex, center, [p1, p2, p3, p4])
        const res = PyramidService.calculateVolume(pyram)
        
        expect(res).toBe(320/3);
        expect(res).toBeGreaterThan(105);
        expect(res).toBeLessThan(108);
    })
})

describe ('parts of the pyramid', () => {
    it('should calculate correct volume ratio for intersection by Z axis', () => {
        const apex = new Point(0, 5, -1);
        const center = new Point(0, 0, 1);   
        const p1 = new Point(-2, 0, 0);
        const p2 = new Point(2, 0, 0);
        const p3 = new Point(-2, 0, 2);
        const p4 = new Point(2, 0, 2);
    
        const pyramid = new Pyramid('py1', apex, center, [p1, p2, p3, p4]);
        const result = PyramidService.calculateVolumeParts(pyramid);

        const height = 5;
        const expectedRatio = 1 - Math.pow(Math.abs(apex.z) / height, 3);

        expect(result).toBeCloseTo(expectedRatio, 1);
    })
})