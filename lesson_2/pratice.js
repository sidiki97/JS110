
/*

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

*/


/*

Get 6 numbers
Output if last num has occurred at least twic

Input: 6 numbers
Loop to get 6 numbers
String ${index} for input phrase
Add nums in an array
Save last number

Use if - else 
Compare last num to 0-5 indices (slice) in array with indexOf or include method


*/

// const readline = require('readline-sync');

// // Searching 101

// let nums = [];

// for (let i = 1; i < 7; i += 1) {
//   if (i === 6) {
//     let last = readline.question('Enter the last number: ');
//     nums.push(last);
//   } else {
//     let num = readline.question(`Enter the ${i}th number: `);
//     nums.push(num);
//   }
// }

// let end = nums[nums.length - 1];
// if (nums.slice(0, 5).includes(end)) {
//   console.log(`The number ${end} appears in ${nums.slice(0,5)}`);
// } else {
//   console.log(`The number ${end} does not appear in ${nums.slice(0,5)}`);
// }


// Palindromic Strings (Part 1)

/*

INPUT: string 
OUTPUT: Boolean

Compare left characters to right character

If string empty or one char, return false

- Find the midpt of the string
- Iterate string till midpt
- Compare character with character from other side
  - Ex. i = 0;
  - Char other side string.length - 1 - i
  - If not equal, return false


return true

*/


function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function isRealPalindrome(string) {
  if (string.length <= 1) {
    return false;
  }

  let alphaString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isAlphanumeric(string[i])) {
      alphaString += string[i].toLowerCase();
    }
  }

  // console.log(alphaString);

  let midpt = alphaString.length % 2 === 1 ? Math.floor((alphaString.length - 1) / 2) : alphaString.length / 2;
  
  for (let i = 0; i < midpt; i += 1) {
    // console.log(alphaString[i]);
    if (alphaString[i] !== alphaString[alphaString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Palindromic Numbers

/*

Input: Number
Output: Boolean
Explicit: 
- Input is Number
- Return Boolean
- 
Implicit: 
- No empty input
- Only Number input

Questions:
- Empty input possible? No
- Non-Number input pass, how to handle? Don't need to worry

Data Structures:
Possible conversion to a String (datatype) 
If converted to a string, use array?

Algorithm:

Convert Input to a String
Use String or Array methods to determine if Number is palindromic



*/

function isPalindromic(number) {
  let string = String(number);
  let midpt = string.length % 2 === 1 ? Math.floor((string.length - 1) / 2) : string.length / 2;
  
  for (let i = 0; i < midpt; i += 1) {
    // console.log(alphaString[i]);
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Running Totals

/*

Input: Array of Numbers
Output: Array of Numbers 

Explicit: 
- (Output) Elements are going to be in increasing order from left to right
- Output array same size as input array

Implicit:
- Size 1 element array returns itself

?'s
- Empty input array possible?
- 

Data Structures:
- Output array (?) - might not need if mutating input array

Algorithm:
Iterate input array
Save sum and replace the element as you iterate
Return array

sum = 0
for loop index of array
add to sum
replace element with sum
next index

return array


*/

function runningTotal(input = []) {
  let sum = 0;

  let total = input.map((num) => {
    sum = sum + num;
    return sum;
  })

  return total;
}

// Letter Count (Part 1) 

/*

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Input: String
Output: Object 

Explicit: 
=> Input string has 0 or more spaces
=> Words consist of any sequence of non-space characters.



Implicit:
=> sizes are keys and number are the values

?'s:
Empty string possible? - return {}


Data Structures:

{} - output


Algorithm:

- Turn string into an array 
- Count words of same length and add info into {}
- return {}


Declare/initialize {}
Remove spaces from string and turn into array with split method
Iterate through array
Add object entries as such:
Initialize empty string
iterate through chars in string
  if alpha => add to string
  replace string in array 
array[index].length if undefined in {} add 1 as val,
else increment val

return {}


*/

function wordSizes(string) {
  if (string.length === 0) {
    return {};
  }
  let obj = {};
  let arr = string.split(' ');


  for (let i = 0; i < arr.length; i += 1) {
    let s = '';
    for (let j = 0; j < arr[i].length; j += 1) {
      if (isAlphanumeric(arr[i][j])) {
        s += arr[i][j];
      }
      
    }
    arr[i] = s;

    obj[arr[i].length] = obj[arr[i].length] === undefined ? 1 : obj[arr[i].length] += 1;
  }

  return obj;
}

// Letter Swap

/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
You may assume that every word contains at least one letter, and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Input: String
Output: Anything? - Most likely string?

Explicit: 
- String at least one word and at least one letter
- No leading, trailing, or repeated spaces

Implicit:
- Strings are not mutable, so returning new string of word(s)

?'s:
Function does not explicitly say return string, so are we returning anything? - Return swap string word

Data Structures:
- Array (string => to array for iteration of word(s))

Algo



*/