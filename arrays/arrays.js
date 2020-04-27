/*
    Arrays in JavaScript
*/

//Ways of initialization
let arr1  = new Array();
let arr2 = new Array('mon','tue', 'wed', 'thu','fri');

let arr3 = [];
let arr4 = ['winter','spring','summer','autmn'];

console.log(typeof arr1); //Array is a object since everything except primitive values are objects
console.log(arr2);
console.log(typeof arr3);
console.log(arr4);
console.log(arr2.length);// getting size of array

/**
 * Accessing elements and iterating an array
 */
console.log(`Days of the week:`);
 for(let i=0; i< arr2.length; i++){
     console.log(arr2[i]);
 }

 console.log(`Seasons:`)
 arr4.forEach(element =>{
     console.log(element)
 })

/**
  * Adding elements to JS array
  * In JavaScript, an array is a mutable object. We can easily add new elements to it. The object will grow
    dynamically as we add new elements to it. In many other languages, such as C and Java, we need to determine
    the size of the array, and if we need to add more elements to the array, we need to create a completely new
    array; we cannot simply add new elements to it as we need them
*/
numbers = [0,1,2,3,4,5,6,7,8];
console.log(`Numbers array: ${numbers}`);

// we can do it manually but its not as elegant as it could be
numbers[numbers.length]= 9;
console.log(`Updated numbers array: ${numbers}`);

// function that built-in for pushing element at the end of array
numbers.push(10);  
console.log(`Updated numbers array: ${numbers}`);
numbers.push(12,13);
console.log(`Updated numbers array: ${numbers}`);



// function that we built-in for inserting element at the beginning of array
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);
console.log(`Updated numbers array: ${numbers}`);

// function that built-in for inserting element at the beginning of array
numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(`Updated numbers array: ${numbers}`);

//Removing an element from the end of the array
numbers.pop();
console.log(`Updated numbers array: ${numbers}`);

// Removing an element from the beginning of the array 
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(let i = 0; i < myArray.length; i++ ) {
        if (myArray[i] !== undefined) {
        // console.log(myArray[i]);
        newArray.push(myArray[i]);
        }
    }
    return newArray;
} 
// remove first position manually and reIndex
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
};
 

//numbers.removeFirstPosition();
console.log(`Updated numbers array: ${numbers}`);

// Built-in shift function 
numbers.shift();
console.log(`Updated numbers array: ${numbers}`);

/**
 * Method Description
concat - Joins multiple arrays and returns a copy of the joined arrays.
every - Iterates every element of the array, verifying the desired
condition (function) until false is returned.
filter - Creates an array with each element that evaluates to true in the
function provided.
forEach - Executes a specific function on each element of the array.
join Joins all the array elements into a string.indexOf
Searches the array for specific elements and returns its position.
lastIndexOf Returns the position of the last item in the array that matches the
search criterion.
map - Creates a new array from a function that contains the
criterion/condition and returns the elements of the array that
match the criterion.
reverse - Reverses the array so that the last item becomes the first and
vice versa.
slice - Returns a new array from the specified index.
some - Iterates every element of the array, verifying the desired
condition (function) until true is returned.
sort - Sorts the array alphabetically or by the supplied function.
toString Returns the array as a string.
valueOf - Similar to the toString method, returns the array as a string
 */


 /**
  * ECMAScript 6 and new array functionalities
  * Method Description
  * @@iterator - Returns an iterator object that contains the key/value pairs of the
    array that can be synchronously called to retrieve key/value of the array elements.
  * copyWithin - Copies a sequence of values of the array into the position of a
    start index.
  *entries - Returns @@iterator, which contains key/value pairs.
  *includes -  Returns true if an element is found in the array, and false
   otherwise. This was added in ES2016.
  *find - Searches for an element in the array given the desired condition
   (callback function) and returns the element if it is found.
  */