const fizzBuzz = require(".")

describe("FizzBuzz", () => {
    it('should return "Fizz" when the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toEqual("Fizz")
        expect(fizzBuzz(9)).toEqual("Fizz")
        expect(fizzBuzz(12)).toEqual("Fizz")
    })

    it('should return "Buzz" when the number is divisible by 5', () => {
        expect(fizzBuzz(5)).toEqual("Buzz")
        expect(fizzBuzz(10)).toEqual("Buzz")
        expect(fizzBuzz(20)).toEqual("Buzz")
    })

    it('should return "FizzBuzz" when the number is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz")
        expect(fizzBuzz(30)).toEqual("FizzBuzz")
        expect(fizzBuzz(45)).toEqual("FizzBuzz")
    })

    it("should return the number itself when not divisible by 3 or 5", () => {
        expect(fizzBuzz(1)).toEqual(1)
        expect(fizzBuzz(4)).toEqual(4)
        expect(fizzBuzz(7)).toEqual(7)
    })
})
