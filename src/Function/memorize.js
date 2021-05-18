// const _ = require('lodash')

function getArea (r) {
    console.log(r)
    return Math.PI * r * r
}

// const memorizedGetArea = _.memoize(getArea)

function memoize (fn) {
    const cached = {}
    return function() {
        const key = JSON.stringify(arguments)
        if (cached[key]) {
            return cached[key]
        }
        const result = fn.apply(fn, arguments)
        cached[key] = result
        return result
    }
}

const memorizedGetArea = memoize(getArea)

console.log(memorizedGetArea(5))
console.log(memorizedGetArea(5))
console.log(memorizedGetArea(4))
console.log(memorizedGetArea(5))
