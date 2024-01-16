const numbers = [2, 6, 12, 7, 22, 35]

// task 1
const firstValue = numbers.at(0) // numbers[0] also works
console.log(firstValue)

// task 2
const lastValue = numbers.at(-1)
console.log(lastValue)

// task 3
const fourthValue = numbers.at(3)
console.log(fourthValue)

// task 4
const secondAndFifthArr = numbers.slice(1, 2).concat(numbers.slice(4, 5))
// using slice() since it makes a shallow copy and doesn't
// mutate the original array, unlike splice()
console.log(secondAndFifthArr)

// task 5
const numbersLength = numbers.length
console.log(numbersLength)