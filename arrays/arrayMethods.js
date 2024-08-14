// concat()
// The concat() method is used to join two or more arrays.
// This method does not change the existing arrays, but 
// returns a new array, containing the values of the joined 
// arrays
var hege = ["Cecilie", "Lone"]
var stale = ["Emil", "Tobias", "Linus"]
var children = hege.concat(stale)
console.log(children)

// copyWhithin()
// copies array elements to another position in the array, 
// overwriting the existing values. This method will never 
// add more items to the array. Note: this method overwrites 
// the original array.
var fruits = ["Banana", "Orange", "Apple"]
fruits.copyWithin(2, 0)
console.log(fruits)

// entries()
// The entries() method returns an Array Iterator object with 
// key/value pairs.
var fruits = ["Banana", "Orange", "Apple"]
var f = fruits.entries()
for (var i of f) {
    console.log(i)
}

// every()
// The every() method checks if all elements in an array pass 
// a test (provided as a function).
var ages = [32, 33, 16, 40]
function checkAdult(age) {
    return age >= 18
}
console.log(ages.every(checkAdult))

// fill()
// The fill() method fills the specified elements in an array 
// with a static value. You can specify the position of where 
// to start and end the filling. If not specified, all elements 
// will be filled.
var fruits = ["Banana", "Orange", "Apple"]
fruits.fill("Kiwi")
console.log(fruits)
fruits.fill("Potato", 0, 2)
console.log(fruits)

// filter()
// The filter() method creates an array filled with all array 
// elements that pass a test (provided as a function).
var ages = ["32", 33, 16, 40, "a"]
function checkAdult(age) {
    return age >= 18
}
var result = ages.filter(checkAdult)
console.log(result)

// find()
// The find() method returns the value of the first element in 
// an array that pass a test (provided as a function).
var ages = [3, 10, 18, 20]
function checkAdult(age) {
    return age >= 18
}
var result = ages.find(checkAdult)
console.log(result)

// findIndex()
// The findIndex() method returns the index of the first 
// element in an array that pass a test (provided as a function).
var ages = [3, 10, 18, 20]
function checkAdult(age) {
    return age >= 18
}
var result = ages.findIndex(checkAdult)
console.log(result)

// forEach()
// The forEach() method calls a function once for each 
// element in an array, in order
var numbers = [65, 44, 12, 4]
function myFunction(item, index, arr) {
    arr[index] = item * 10
}
numbers.forEach(myFunction)
console.log(numbers)

// includes()
// The includes() method determines whether an array 
// contains a specified element.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = fruits.includes("Apple", 2)
console.log(result)

// indexOf()
// The indexOf() method searches the array for the specified 
// item, and returns its position
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = fruits.indexOf("Apple")
console.log(result)

// isArray()
// The isArray() method determines whether an object is an 
// array.Thinction returns true if the object is an array, and 
// false if not
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = Array.isArray(fruits)
console.log(result)

// join()
// Convert the elements of an array into a string. The join() 
// method returns the array as a string
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = fruits.join(" and ")
console.log(result)

// lastIndexOf()
// The lastIndexOf() method searches the array for the 
// specified item, and returns its position
var fruits = ["Banana", "Orange", "Mango", "Apple", "Mango"]
var result = fruits.lastIndexOf("Mango")
console.log(result)

// map()
// The map() method creates a new array with the results of 
// calling a function for every array element.
var numbers = [4, 9, 16, 25]
var result = numbers.map(Math.sqrt)
console.log(result)

// pop()
// The pop() method removes the last element of an array, 
// and returns that element.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.pop()
console.log(fruits)

// puch()
// The push() method adds new items to the end of an array, 
// and returns the new length.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var length = fruits.push("Kiwi")
console.log(fruits)
console.log(length)

// reduce()
// The reduce() method executes a provided function for 
// each value of the array (from left-to-right) and reduces the 
// array to a single value.
var numbers = [15.5, 2.3, 1.1, 4.7]
function getSum(total, num) {
    return total + Math.round(num)
}
var result = numbers.reduce(getSum, 0)
console.log(result)

// reduceRight()
// The reduceRight() method executes a provided function 
// for each value of the array (from right-to-left) and reduces 
// the array to a single value
var numbers = [175, 50, 30]
function myFunc(total, num) {
    return total - num
}
var result = numbers.reduceRight(myFunc)
console.log(result)

// reverse()
// The reverse() method reverses the order of the elements 
// in an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.reverse()
console.log(fruits)

// some()
// The some() method checks if any of the elements in an 
// array pass a test (provided as a function). It executes the 
// function once for each element present in the array
var ages = [3, 10, 18, 20]
function checkAdult(age) {
    return age >= 18
}
console.log(ages.some(checkAdult))

// slice()
// The slice() method selects the elements starting at the 
// given start argument, and ends at, but does not include, 
// the given end argument. It returns the selected elements 
// in an array, as a new array object
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
var citrus = fruits.slice(1, 3)
console.log(citrus)

// shift()
// The shift() method removes the first item of an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.shift()
console.log(fruits)

// sort()
// The sort() method sorts the items of an array
var fruits = ["A", "Banana", "Orange", "Apple", "Mango"]
fruits.sort()
console.log(fruits)

// splice()
// The splice() method adds/removes items to/from an array, 
// and returns the removed item(s).
var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 1, "Lemon", "Kiwi")
console.log(fruits)

// toString()
// The toString() method returns a string with all the array 
// values, separated by commas
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = fruits.toString()
console.log(result)

// unshift()
// The unshift() method adds new items to the beginning of 
// an array, and returns the new length
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var length = fruits.unshift("Lemon", "Pineapple")
console.log(fruits)
console.log(length)

// valueOf()
// The valueOf() method returns the array. This method is the 
// default method of the array object. Array.valueOf() will 
// return the same as Array
var fruits = ["Banana", "Orange", "Apple", "Mango"]
var result = fruits.valueOf()
console.log(result)
console.log(fruits)
