const findFactor = require(".")

describe("findFactor", () => {
    it("should return [1,2,5]", () => {
        expect(findFactor(10, 3)).toEqual([1, 2, 5])
    })
    it("should return [1, 2, 3, 4, 5, 6, 8, 10, 12, 15]", () => {
        expect(findFactor(120, 10)).toEqual([1, 2, 3, 4, 5, 6, 8, 10, 12, 15])
    })
    it("should return angka 349 hanya memiliki 2 faktor yaitu 1,349", () => {
        expect(findFactor(349, 20)).toEqual("angka 349 hanya memiliki 2 faktor yaitu 1,349")
    })
})
