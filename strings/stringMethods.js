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

// indexOf()
// The indexOf() method returns the position of the first 
// occurrence of a specified value in a string. This method 
// returns -1 if the value to search for never occurs.
var str = "Hello world, welcome to the universe."
var result = str.indexOf("e")
console.log(result)

// lastIndexOf()
// The lastIndexOf() method returns the position of the last 
// occurrence of a specified value in a string. The string is 
// searched from the end to the beginning, but returns the 
// index starting at the beginning, at position 0
var str = "Hello world, welcome to the universe."
var result = str.lastIndexOf("e")
console.log(result)

// localeCompare()
// The localeCompare() method compares two strings in the 
// current locale. The locale is based on the language 
// settings of the browser.
// Returns -1 if str1 is sorted before str2
// Returns 0 if the two strings are equal
// Returns 1 if str1 is sorted after str2
var str1 = "ab"
var str2 = "ab"
var result = str1.localeCompare(str2)
console.log(result)

// match()
// The match() method searches a string for a match against 
// a regular expression, and returns the matches, as an Array 
// object
var str = "The rain in SPAIN stays mainly in the plain"
var result = str.match(/ain/g)
console.log(result)

// repeat()
// The repeat() method returns a new string with a specified 
// number of copies of the string it was called on
var str = "Hello world"
var result = str.repeat(2)
console.log(result)

// replace()
// The replace() method searches a string for a specified 
// value, or a regular expression, and returns a new string 
// where the specified values are replaced
var str = "Visist Microsoft!"
var result = str.replace("Microsoft", "W3Schools")
console.log(result)