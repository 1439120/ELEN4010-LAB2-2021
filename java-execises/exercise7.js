const numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19)
// output: 76 55.7 89 37.5 61 19

numbers.unshift(61)
// output: 61 76 55.7 89 37.5 61 19

numbers[1] = 12
// output: 61 12 55.7 89 37.5 61 19

numbers.splice(3, 1, 99)
// output: 61 12 55.7 99 37.5 61 19

console.log(numbers)
// output: 61 12 55.7 99 37.5 61 19

console.log(numbers[7])
// output: undefined
