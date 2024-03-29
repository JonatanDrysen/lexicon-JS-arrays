const numbers = [2, 6, 12, 7, 22, 35]
console.log("Original array: ", numbers)

// task 1
const firstValue = numbers.at(0) // numbers[0] also works
console.log("task 1: ", firstValue)

// task 2
const lastValue = numbers.at(-1)
console.log("task 2: ", lastValue)

// task 3
const fourthValue = numbers.at(3)
console.log("task 3: ", fourthValue)

// task 4
const secondAndFifthArr = numbers.slice(1, 2).concat(numbers.slice(4, 5))
// using slice() since it makes a shallow copy and doesn't
// mutate the original array, unlike splice()
console.log("task 4: ", secondAndFifthArr)

// task 5
const numbersLength = numbers.length
console.log("task 5", numbersLength)

// task 6
const pushedArr = numbers.push(731)
console.log("task 6: ", pushedArr) 
// The return value represents the new length property of the array

// task 7
const unshiftedArr = numbers.unshift(42)
console.log("task 7: ", unshiftedArr) 
// The return value also represents the new length property, like arr.push()

// task 8
const poppedArr = numbers.pop()
console.log("task 8: ", poppedArr)
// the return value represents the removed or "popped" value from the array

// task 9
const shiftedArr = numbers.shift()
console.log("task 9: ", shiftedArr)

// task 10
console.log("task 10", numbers) // Wow!!