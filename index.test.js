const fizzBuzz = require(".")

describe("FizzBuzz", () => {
    it('should return "Fizz" when the number is divisible by 3', () => {
        expect(fizzBuzz(3)).to.equal("Fizz")
        expect(fizzBuzz(9)).to.equal("Fizz")
        expect(fizzBuzz(12)).to.equal("Fizz")
    })

    it('should return "Buzz" when the number is divisible by 5', () => {
        expect(fizzBuzz(5)).to.equal("Buzz")
        expect(fizzBuzz(10)).to.equal("Buzz")
        expect(fizzBuzz(20)).to.equal("Buzz")
    })

    it('should return "FizzBuzz" when the number is divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).to.equal("FizzBuzz")
        expect(fizzBuzz(30)).to.equal("FizzBuzz")
        expect(fizzBuzz(45)).to.equal("FizzBuzz")
    })

    it("should return the number itself when not divisible by 3 or 5", () => {
        expect(fizzBuzz(1)).to.equal("1")
        expect(fizzBuzz(4)).to.equal("4")
        expect(fizzBuzz(7)).to.equal("7")
    })
})
