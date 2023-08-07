/* 

function ini akan menerima 2 input.
n -> angka yang mau dicari faktornya,
many -> banyaknya faktor yang mau dicari

contoh:
findFactor(10, 3) -> [1,2,5]
findFactor(7,5) -> "angka 7 hanya memiliki 2 faktor yaitu 1,7"
*/

function findFactor(n, many) {
    // lanjutkan dibawah
    let count = 0
    const answer = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count += 1
            answer.push(i)
        }
        if (count === banyak) {
            break
        }
    }
    if (count < banyak) {
        return `angka ${n} hanya memiliki ${count} faktor yaitu ${answer}`
    }
    return answer
}

module.exports = findFactor
