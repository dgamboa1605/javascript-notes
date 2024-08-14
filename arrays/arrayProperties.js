// constructor
// In JavaScript, the constructor property returns the 
// constructor function for an object. For JavaScript arrays 
// the constructor property returns function Array() { [native 
// code] }
var fruits = ["Banana", "Orange", "Apple"]
console.log(fruits.constructor)

// length
// The length property sets or returns the number of 
// elements in an array
var fruits = ["Banana", "Orange", "Apple"]
console.log(fruits.length)

var vegetables = []
vegetables.length = 4
console.log(vegetables.length)

// prototype
// The prototype constructor allows you to add new 
// properties and methods to the Array() object.
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase()
    }
};

var fruits = ["Banana", "Orange", "Apple"]
fruits.myUcase()
console.log(fruits)
