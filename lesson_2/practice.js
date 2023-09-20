
// # 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/*

input: object
output: sorted object (published year)

Explicit:
- years are strings not numbers
- order earliest to latest

Implicit:
- will only worry about accessing published key from objects

?'s:
Return new array or in-place update?

Datastructures:


Algorithm:

Access published years

{}.sort((a,b) => a[published] - b[published]);
*/

books.sort((a,b) => a['published'] - b['published']);


// #5

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};



/*

sum variable = 0
Object.values() => list of objs {age: #, gender: m/f}
iterate list of objs
if male
add to sum

*/

function sumAge(famAges) {
  let sum = 0;
  let peeps = Object.values(famAges);
  peeps.forEach(peep =>
    {
      if (peep['gender'] === 'male') {
        sum += peep['age'];
      }
    });
  return sum;
}

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

/*

map => outer array elements
callback => elements
filter on elements/subarrays => index % 3 === 0


*/

let mod = arr.map(subarray => 
  subarray.filter(num => 
    num % 3 === 0));

    
let array = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/*
array.sort(a,b)

reduce method

*/
array.sort( (a,b) =>
a.reduce( (accumulator, currentVal) => {
  if (currentVal % 2 === 1) {
    return accumulator + currentVal;
  } else {
    return accumulator;
  }
}, 0) - 
b.reduce( (accumulator, currentVal) => {
  if (currentVal % 2 === 1) {
    return accumulator + currentVal;
  } else {
    return accumulator;
  }
}, 0)
)



// let a1 = [1, 6, 7];
// console.log(a1.reduce( (accumulator, currentVal) => {
//   if (currentVal % 2 === 1) {
//     return accumulator + currentVal;
//   } else {
//     return accumulator;
//   }
// }, 0));


let arri = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// console.log(arri.filter( obj => {
//   return Object.values(obj).every (
//     subarray => 
//     {
//       return subarray.every(num => num % 2 === 0);
//     }
//   ) }
//   ))

const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
]

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];
todoLists[0]['todos'][2]['name'] = 'Orange Juice';

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}


/*

Input: String
Output: String

Explicit: 
- Input String
  - at least one word
  - each word at least one letter
  - words separated by spaces
  - no trailing spaces

- Replace first and last letter of each word in string

Implicit:
- 

?'s

Datastructures
might not need initialize new array can return array from string

Algorithm

Switch the first and last letter of each word in string

1. Split the string => array of words
2. Use map method on array words to transform words
  Callback will return a string that switches the first and last letter
    return last character[] + word.slice(1, word.length - 2) + word[first character]
3. join words with a space
4. return string


*/

function swap(string) {
  let words = string.split(' ');
  let updatedWords = words.map((word) => {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  })

  let newString = updatedWords.join(' ');
  return newString;
}


/*

input: string
output: number

Explicit:

input - all characters are numeric
cannot use type casting or built-in functions

Implicit:

?'s

Datastructures
n/a

Algorithm

implicit type conversion
when string used againt - / or * string converts to number



*/

function stringToInteger(string) {
  return string / 1;
}


/*

Input: Number
Output: String 

Explicit: 
- 60 min in degree
- 60 seconds in minute
- Floating point number input

Implicit:
An input of 360 can have two possible values
minutes and seconds calculation two places

?'s
How to determine minutes and seconds
Ex: 76.73
76 - degrees
minutes - .73 * 60 = 43.8 => 43
seconds - .8 * 60 => 48
76˚ 43' 48"
Numbers greater than 360 how to handle? - do we need to worry about?


Examples
how to pull minutes and seconds
input % 1 => num to use in minute calculation
minute calculation => take prev num and multiply to 60
second calculation => take prev num and multiply to 60 

Data Structures
Strings
Array => join later?

Algorithm

initialize a string

Get Degrees
Math.floor(input)
add to string


Get Minutes
input % 1 => num
num * 60 => min
Math.floor(min)
add to string


Get Seconds
min % 1 => num
num * 60 => secs
Math.floor(secs)
add to string

function(num){
  num % 1 => num
  num * 60 => num
  return Math.floor(num)
}

return string

*/

function helper(num) {
  let fraction = num % 1;
  let anglePart = fraction * 60;
  return anglePart;
}

function lessThanTen(num = 1) {
  let numMod = Math.floor(num);
  return numMod < 10 ? '0' + numMod : numMod;
}

function dms(num) {
  let angle = '';

  // Get Degrees
  let degree = lessThanTen(num);
  angle += degree + '˚ '

  // Get Minutes
  let minutes = helper(num);
  let minuteMod = lessThanTen(minutes);
  angle += minuteMod + '\' ';

  // Get Seconds
  let seconds = helper(minutes);
  let secondMod = lessThanTen(seconds);
  angle += secondMod + '\"';

  return angle;

}

/*

Sum of Digits:

Input: number
Output: number

Explicit: 
- positive number is input
- no for, while, do..while loops 
- method calls only

Implicit: 
- 

?'s
Can you array methods such as forEach, map, etc.?

Datastructures
- built in data types will be used


Algorithm
main 
let sum = 0
return helper(input, sum)


Helper method
if num === 0:
return sum;

inputs: num and sum

sum += num mod 10

num = Math.floor(num / 10);


return recursive helper(num, sum)


*/

function sumHelper(num, sum) {
  if (num === 0) {
    return sum;
  }
  sum += num % 10;
  num = Math.floor(num / 10);
  return sumHelper(num, sum);
}

function sum(num) {
  return sumHelper(num, 0);
}

/*
Palindromic Substrings

input: string
output: ['palindromes']

Explicit:
- 

*/

/*

All Substrings

Input: string
Output: Array/list of strings

Explicit:
- Output order
  - order the returned list by where in the string the substring began
  - return substring starting at specific index from shortest to longest

  Implicit:
  - no for ? below
  - substring length from 1 to max.string length

  ?'s
  Spaces in input
  - considered substring itself?

  Datastructures
  - Array


  Algorithm

  Two pointers solution?

  let array = [];

  Iterate the array 

  Nested loop
  Outer loop - all characters in array
   inner loop - start at character in outer loop + 1 till end of string
   Extract substrings at each iteration
   slice method(outer loop, inner loop index + 1)
   push to array


*/

function substrings(string) {
  let arrayOfSubstrings = [];

  for (let char = 0; char < string.length; char ++) {
    for (let sub = char; sub < string.length; sub++) {
      arrayOfSubstrings.push(string.slice(char, sub + 1));
    }
  }

  return arrayOfSubstrings;
}



/*

Palindromic Substrings

Input: string
Output: array

Explicit:
- return list of palindromic substrings
- The substrings in the returned list should be sorted by their order of appearance in the input string
- duplicate strings should be included multiple times
- Consider all characters
- Single characters are not palindromic

Implicit:
- Input is not empty string
- Uppercase and lowercase matter

?'s
a space is considered a substring?

Datastructures
- List/array

Algorithm

Initialize array that will hold palindromic substring

Use substrings function to extract all substrings
Iterate substrings
  Extract palindrome substrings
    Helper function to determine palindrome
      substring has to be at least length > 1
      find midpt of string
      iterate till midpt and compare to end
      if not same before end
        return false
      return true
    add to array
Return palindrome substrings


*/

function helperPalindrome(string) { 
  if (string.length === 1) return false;
  for (let c = 0; c < Math.floor(string.length / 2); c++){
    if (string[c] !== string[string.length - c - 1]) {
      return false;
    }
  }
  return true;
}

function palindromes(string) {
  let allSubstrings = substrings(string);

  let onlyPalindromes = allSubstrings.filter(substring => helperPalindrome(substring));

  return onlyPalindromes;
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
