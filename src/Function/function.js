// 函数作为参数
function forEach(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        fn(arr[i])
    }
}

// const array = [1, 2,3,4]
// forEach(array, item => console.log(item * 2))

function filter(arr, fn) {
    const result = []
    for(i = 0; i< arr.length; i++) {
        if (fn(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
// const array = [1, 2,3,4]
// console.log(filter(array, item => item > 2))

function makeFn() {
    const name='hjh'
    return () => {
        console.log(name)
    }
}
const fn = makeFn()
fn()

function once(fn) {
    let hasExec = false
    return () => {
        if (hasExec) {
            return
        } else {
            hasExec = true
            fn.apply(this, arguments)
        }
    }
}

// const test = once(() => console.log('执行了一次'))
// test()
// test()
// test()

const array = [1, 2,3,4]
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))

console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
