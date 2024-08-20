// charAt()
// The charAt() method returns the character at the specified 
// index in a string. The index of the first character is 0, the 
// second character is 1, and so on.
var str = "Hello World"
var result = str.charAt(4)
console.log(result)

// charCodeAt()
// The charCodeAt() method returns the Unicode of the 
// character at the specified index in a string.
var str = "Hello World"
var result = str.charCodeAt(1)
console.log(result)

// concat()
// The concat() method is used to join two or more strings. 
// This method does not change the existing strings, but 
// returns a new string containing the text of the joined 
// strings.
var str1 = "Hello"
var str2 = "World"
var result = str1.concat(str2)
console.log(result)

// endsWith()
// The endsWith() method determines whether a string ends 
// with the characters of a specified string. This method 
// returns true if the string ends with the characters, and 
// false if not.
var str = "Hello world, welcome to the universe."
var result = str.endsWith("universe.")
console.log(result)

// fromCharCode()
// The fromCharCode() method converts Unicode values into 
// characters. This is a static method of the String object, 
// and the syntax is always String.fromCharCode()
var result = String.fromCharCode(50)
console.log(result)

// includes()
// The includes() method determines whether a string 
// contains the characters of a specified string.
var str = "Hello world, welcome to the universe."
var result = str.includes("world")
console.log(result)
