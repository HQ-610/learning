const _ = require('lodash')

const array = ['hjh', 'hjl', 'lh']

console.log(_.first(array))
console.log(_.last(array))
console.log(_.toUpper(_.first(array)))

// 不纯
console.log(_.reverse(array))
console.log(array)

const r = _.each(array, (item, index) => {
    console.log(item, index)
})
console.log(r)

console.log(_.includes(array, 'hjh'))
