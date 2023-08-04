const minMax = require(".")

describe("MinMax", () => {
    it("should return {min:1 , max:5}", () => {
        const arr = [1, 2, 3, 4, 5]
        expect(minMax(arr)).toEqual({ min: 1, max: 5 })
    })
    it("should return {min:2 , max:20}", () => {
        const arr = [5, 2, 4, 20, 19]
        expect(minMax(arr)).toEqual({ min: 2, max: 20 })
    })
    it("should return {min:-999 , max:3}", () => {
        const arr = [-999, 2, 3, 1, -10]
        expect(minMax(arr)).toEqual({ min: -999, max: 3 })
    })
})
