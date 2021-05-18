// 有硬编码，扩展性差

// function checkAge(age) {
//     let min = 18
//     return age >= min
// }

// function checkAge(min, age) {
//     return age >= min
// }

// 重复写18，繁琐
// console.log(checkAge(18, 10))
// console.log(checkAge(18, 20))

// 柯里化
// function checkAge(min) {
//     return (age) => {
//         return age >= min
//     }
// }

// const checkAge = min => age => age >= min

// const checkAge18 = checkAge(18)
// console.log(checkAge18(10))
// console.log(checkAge18(20))

const _ = require('lodash')

function checkAge(min, age) {
    return age >= min
}

const curried = _.curry(checkAge)
console.log(curried(10,12))
console.log(curried(10,1))
console.log(curried(10)(1))
console.log(curried(10)(12))
