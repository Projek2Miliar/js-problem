/*
FizzBuzz

jika n dibagi habis 3 -> maka kembalikan 'Fizz'
jika n dibagi habis 5 -> maka kembalikan 'Buzz'
jika n dibagi habis 3 dan 5 -> maka kembalikan 'FizzBuzz'
jika tidak memenuhi 3 syarat diatas -> maka kembalikan angka tersebut.

*/

function FizzBuzz(n) {
    // lanjutan di bawah
    switch (true) {
        case n % 15 === 0:
            return "FizzBuzz"
        case n % 3 === 0:
            return "Fizz"
        case n % 5 === 0:
            return "Buzz"
        default:
            return n
    }
}

// ini jangan di edit
// jika sudah selesai di code, di terminal ketik npm run test
module.exports = FizzBuzz
