/* 
Write a function called splitString that takes a string as an argument
and return an array with each individual character in the string
as it's indexes

"Hello" => ["H", "e", "l", "l", "o"]

*/

function splitString(string) {
    return string.split("");
}
    console.log(splitString("Daniel Scott"))


//"Hello World".split(" ") //=>  ["Hello", "World"]
//"Hello World".split("") //=>  ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]



// We call while loops, while statements because they evaluate a predicate
/*
let counter = 10;

while(counter != 0){
    console.log('Counting Down: ', counter);
    counter--;
}
*/
// => 'Counting Down: ', 10
// => 'Counting Down: ', 9
// => 'Counting Down: ', 8

/*
let counter = 0;

while(counter !=100) {
    console.log('Counting Up:', counter);
    counter ++;

}
 


let limit = 100;

for(let i = 0; i <= limit; i++){
    console.log(i)
}

*/

let limit = 100;

for(let i = 0; i <= limit; i++){
    console.log(i)
}

// Lifecycle of a forloop
/*
    1) Intialize a variable named "i" and set it's initial value to 0 (This only happend the first time!!)
    2) We check the loop condition - is the iterator less than or equal to limit
    3) If true, the code block executes ...everything inside of the {}
    4) Then we increment the iterator by 1
*/

/*
    Convert Celsius to Fahrenheit

    1) Write a function called celsiusToF
    2) It must take a single argument which is a number value in celsius
    3) Then it must return that value converted to Fahrenheit

    32 => 89.6
    
    C * 9/5 + 32

*/
    function celsiusToF(celsius) {
        return celsius * 9/5 + 32;
    }
        console.log(celsiusToF(32));
       
// Working with strings

/*
    String datatype is a sequence of characters wrapped in a set of quotes
 */

 // Examples

 const firstName = "Jen"; // double quotes

 const lastName = 'Maguire'; // single quotes

 // interpolation is the ability to create a string by injecting references to other strings into one using backticks
 
 const fullName = `${firstName} ${lastName}`; 


 const fullNameAlt = firstName + " " + lastName;
 
 const fullNameAltTwo = "Jen Maguire";


 const firstNameAlt = `Daniel`; // <= don't do this





// Below is an Object literal - we express these by wrapping sets of key value pairs inside of curly braces
// NOTE: We can also consider an "empty" object as valid 
const person = {
    firstName: "Jen", // these are object properties ...i.e. key value pairs - we also call them "members"
    lastName: "Maguire",
    occupation: "Engineer"
};

const name = `${person.firstName} ${person.lastName}`; // => Jen Maguire

/*
 1) Make an object literal named response that models data representing a pet.
 2) It can be any pet.
 3) It needs to have three properties, name, type, age.

*/

// Use to use template literals to make a string that says, "this is my pet, "name", it's a "type" "



const response = {
    name: 'Rover',
    type: 'German Shepherd',
    age: 10,
};

const phrase = `This is my pet ${response.name}, it's a ${response.type}`;


// Let's compare the above code to how we could produce the same result, but with a function

function greeting(obj) {
    return `Hello, ${obj.firstName}, ${obj.lastName}, how do you enjoy working as an ${obj.occupation}?`;
}

const myObject = {
    firstName: 'Daniel',
    lastName: 'Scott',
    age: 34,
    occupation: 'Engineer'
};

const phraseTwo = greeting(myObject);

console.log(phraseTwo);

/*

 Write a function named personalizedHello that takes one input as an argument; 
 a string input of someone's name.

 Using template strings, 
 return a string that says "Hello, name" where name is whatever name that got passed to the function as 
 an argument, so for example:

 personalizedHello("Jen") //=> "Hello, Jen"
 */


function personalizedHello(name) {
    return `Hello, ${name}`;
}
personalizedHello("Jen") // => "Hello, Jen";



/*****************************************************************/

/*
    Write a function greeting that takes an object as it's argument
    that object represents a database query of a person, so:

    Input:
    {
        firstName: "Daniel",
        lastName: "Scott",
        age: 34,
        occupation: Engineer
    }

    this function will return a string that says:

    Output:
    Hello, Daniel Scott, how do you enjoy working as an Engineer?

    Make sure you use template literals: ``

 */

 // 1) Stub up the function
 // 2) Set up parameter
 // 3) Return a string

function greeting(obj) {
    return `Hello, ${obj.firstName}, ${obj.lastName}, how do you enjoy working as an ${obj.occupation}?`;
}

// const myObject = {
//     firstName: 'Daniel',
//     lastName: 'Scott',
//     age: 34,
//     occupation: 'Engineer'
// };

// console.log(greeting(myObject));



// Write a function called multiplyNums that take two integer inputs and returns their sum.
function addNums(num1, num2) {
    return num1 + num2;
}

// const numberOne = 1;
// const numberTwo = 3;

// addNums(numberOne, numberTwo);
// addNums(numberOne, numberTwo);


// Write a function called multiplyNums that take two integer inputs and returns their product.

function multiplyNums(num1, num2){
    return num1 * num2;
}

    const numberOne = 3;
    const numberTwo = 4;

    multiplyNums(numberOne, numberTwo);

// Write a function called multiplyNums that take two integer inputs and returns their difference.
  function subtractNums(num1, num2) {
      return num1 - num2;
  }
    // const numberOne = 11;
    // const numberTwo = 9;

    subtractNums(numberOne, numberTwo);

   // Write a function called divideNums that take two integer inputs and returns their quotient.
  function divideNums(num1, num2){
      return num1 / num2;
  }
    const divideOne = 22;
    const divideTwo = 2;

    // divideNums(divideOne, DivideTwo);

/*
    1. Write a functionthat's called logEvens that accepts an array of integers as it's input.
    2. The function, that when called with the array passed in as an argument, shoud iterate over that array and console log only the even numbers.
    3. Once all the even numbers are console logged, the function should then return the array.
*/

function logEvens(ints) {
  for (let i = 0; i < ints.length; i++) {
      if (ints[i]%2 === 0) {
          console.log(ints[i]);
      }
    };
    return ints;
}

logEvens([2, 4, 7, 8, 9, 14]);

/*
Write a function called "isOldEnoughToDrinkAndDrive".

Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.

Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.

 */

function isOldEnoughToDrinkAndDrive(age) {
    if(age >= 21) {
        return true;
    } else {
        return false;
    }
}


// Alternate Example

function isOldEnoughToDrinkAndDrive(age) {
    return age >= 21; // true or false
}
isOldEnoughToDrinkAndDrive(21);

    
// ********************//
/*
Write an if statement that checks if age is greater than or equal to 21
if it is, console true, else false
 */

 let myAge = 16;

 if (myAge >= 21) {
     console.log(true)
 } else {
     console.log(false)
 }

 /*
Write a function called "checkAge". 

Given a person's name and age, "checkAge" returns one of two messages:

if they are younger than 21:    "Go home, {insert_name_here}!", 
if they are 21 or older:        "Welcome, {insert_name_here}!"

Naturally, replace "{insert_name_here}" with the given name. :)
 
 */

function checkAge(name, age) {
    if (age < 21) {
        return `Go home, ${name}!`;
    } else {
        return `Welcome, ${name}`;
    }
}
checkAge(`Daniel`, 22);

//Write a function called getFullName. Given the first and last name, "getFullName" returns a single string with the given first and last names seperated by a single space.
// EXAMPLE: getFullName('Joe', 'Smith');  // => "Joe Smith"

function getFullName(first, last){
    return `${first}, " " ${last}`;
};
getFullName(`Joe`, `Smith`);

// Or....

function getFullName(obj) {
    return `${obj.firstName}, ${obj.lastName}`;
};

// const myObject = {
// firstName: 'Joe',
// lastName: 'Smith',
// }
// console.log(getFullName(myObject));



/*

Write a function called "isGreaterThanTen".

Given a number, "isGreaterThanTen" returns whether it is greater than 10.


var output = isGreaterThanTen(11);
console.log(output); // --> true
 */

 function isGreaterThanTen(num) {
    if (num > 10) {
        return true;
    } else {
        return false;
    }
 };
 
 // call the function down here:
    var output = isGreaterThanTen(11);
    console.log(output);    
    
    


    /*

     Write a function called "isEven".

    Given a number, "isEven" returns whether it is even.

    var output = isEven(11);
    console.log(output); // --> false
     */


     // Write the function here
    function isEven(num) {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    // Call the function here
        var output = isEven(11);
        console.log(output);


/*

Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false

*/

function isEvenLength(word) {
    if (word.length % 2 === 0) {
    return true;
}   else {
    return false;
}
};
var output = isEvenLength(`wow`);
console.log(output);


/*
Write a function called checkEvensAndOdds

It will take an array as it's one and only argument

This function, when called, must check each value in the array

and console.log even or odd repective to each value in the array

// 1 = console.log('odd')
// 2 = console.log('even')

var output = checkEvensAndOdds([1, 2, 1, 2])
console.log(output) 

'odd' 
'even' 
'odd' 
'even'
[1, 2, 1, 2]

Once you reach the end of the loop, return the array

*/


// Write the function
function checkEvensAndOdds(ints) {
    for (let i = 0; i < ints.length; i++) {
        if (ints[i] % 2 === 0) {
            console.log('even'); 
        } else {
            console.log('odd');
        }
    }
    return ints;
};

var output = checkEvensAndOdds([1, 2, 1, 2]);
console.log(output);




// Call the function