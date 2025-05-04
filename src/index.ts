import { readFromFile } from './utils/filereader.js'
import { Rectangle } from './entities/rectangle.js'
import { RectangleService } from './services/RectangleService.js'
import { Pyramid } from './entities/pyramid.js'
import { PyramidService } from './services/PyramidServices.js'
import { ValidationError } from './exceptions/validationError.js'
import { logger } from './logger.js'


const figures = readFromFile('input/input.txt')
try {
    for (let figure of figures ) {
        if (figure instanceof Rectangle) {
            console.log(figure.id)
            const existing = RectangleService.rectangleExists(figure)
            const isRectangle = RectangleService.rectangleExists(figure)
            const square = RectangleService.calculateArea(figure)
            const perim = RectangleService.calculatePerimetr(figure)
            const isSq = RectangleService.isSquare(figure)
            const isRh = RectangleService.isRhomb(figure)
            console.log(existing, isRectangle, square, perim, isSq, isRh)
        } else {
            if (figure instanceof Pyramid) {
                console.log(figure.id)
                const isPyramid = PyramidService.isValidPyramidShape(figure)
                const PSquare = PyramidService.calculateArea(figure)
                const PVolume = PyramidService.calculateVolume(figure)
                const rate = PyramidService.calculateVolumeParts(figure)
                const plane = PyramidService.FoundationOnThePlane(figure)
                console.log(isPyramid, PSquare, PVolume, rate, plane)
            }
        }
    }
}  catch (err) {
    logger.warn(`Unknown error`);
}
