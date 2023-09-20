
/*

input: string
output: Object 3 properties
(1. # of lowercase letters
 2. # of uppercase letters
 3. # of none of the above
)

Explicit:
Need to be able to handle empty string


Implicit:
non alphabetic is considered under 3rd category

?'s
How are going to determine if character is uppercase or lowercase?
'abc..'.includes()

Datastructures
object needs to be declared and initialized

Algorithm

Initialize declare and empty object (output) with properties
declare initialize strings of uppercase and lowercase


Iterate the characters of the string
For loop iterates length of the string

  compare if character is in uppercase or lowercase string use of includes()
    if true in lowercase => add to lowercase property
    if true in uppercase => add to uppercase property
    else => add to neither property

return object

*/

function letterCaseCount(string) {
  let output = {'lowercase': 0, 'uppercase': 0, 'neither': 0};
  const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < string.length; i += 1) {
    if (LOWER_CASE.includes(string[i])) {
      output.lowercase += 1;
    } else if (UPPER_CASE.includes(string[i])) {
      output.uppercase += 1;
    } else {
      output.neither += 1;
    }
  }
  
  return output;
}

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }


/*

Staggered Caps

input: string
output: string

Explicit rules
- output staggered capitalization scheme
  - first character Capitalized
  - Every other character will be capitalized
  Ex: Ian => IaN
  if non-alphabetic character, then => no change but part of determining if next character is upper or lowercsae
  Ex: Ian3a => IaN3A

Implicit:
The return string will be a new string => strings are immutable

?'s
- First character is non-alphabetic, so will next (2nd character) still be lowercase?
-> Assume first character is alphabetic, but also, always treat first character as uppercase

Datastructures
n/a

Algorithm

Initialize an empty string

Iterate the string
For loop through the length of string
  if even index => make uppercase and add to empty string
  if odd index => make lowercase and add to empty string

return string

*/

function staggeredCase(string) {
  let output = '';

  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) {
      output += string.charAt(i).toUpperCase();
    } else {
      output += string.charAt(i).toLowerCase();
    }
  }

  return output;
}

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*

Input: 2 strings (word, string of text)
output: # count word appears in string of text

Explicit: 
- Word and text of strings are always provided 
- in text of strings => word breaks are spaces
- case - insensitive search

Implicit:
- word is always a single word
- don't expect a space character word be passed as argument

?'s
word is alphabetic only? - does it matter?

Datastructures
- object that keeps word count

Algorithm

variables tracking
word (fully lowercased)
count is 0


string of text => array via split(' ')
Iterate string elements of array
if string === word
  add count

return count


*/

function searchWord(word = '', stringOfText = ''){
  let searchTerm = word.toLowerCase();
  let count = 0;

  let strings = stringOfText.split(' ');
  strings.forEach((string) => {
    string = string.toLowerCase();
    if (string === searchTerm) {
      count += 1;
    }
  })

  return count;

}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';


/*

Rotation

Input: array
Output: new array

Explicit rule:

- do not modify the original/input array
- If input is not array, return undefined
- if input is empty array, return empty array


Implicit rules:
- not going to be using array methods, pop push on original array
- slice => then modify that

?'s 

Datastructures
- array to return


Algorithm

Verify input is array
=> else return undefined

Create Array copy with slice

Take first element and place in the back of an array copy
arrayCopy.push(array.shift());

return arrayCopy

*/

function rotateArray(array) {
  if (array === undefined) {
    return undefined;
  }

  if (typeof(array) !== "object" && array.length === undefined) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }
  let arrayCopy = array.slice();
  let element = arrayCopy.shift();
  arrayCopy.push(element);

  return arrayCopy;
}


/*

Rotate Digits

Input: 2 arguments (number, rotation number-place)
Output: number with rotation performed

Explicit:
second argument determines place in first argument


Implicit:
output is new number, numbers not mutable

Datastructures:
potentially array if i convert number to string to array

Algorithm

Convert number to string
String(number)

to access correct digit:
string.length - second_argument => switch_element_index

Perform the switch
concatenation
access
string.slice(0, switch_element_index) + string[string.length - 1] + string.slice(switch_element + 1, string.length - 1)

Convert that to a number

return number



*/


function rotateRightmostDigits(number, place) {

  let string = String(number);

  let switchIndex = string.length - place;

  let stringified = string.slice(0, switchIndex) + 
  string.slice(switchIndex + 1) + string[switchIndex];

  return Number(stringified);

}

/*

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

*/

/*

Input: string
output: some actions on input/console.log, etc.

Data structure 
register value = 0
stack = []
obj 
{
  COMMAND : function()
}

Algorithm

Take string and split => array
Iterate the array and match it with functions to do
run parseInt on element
if NaN => function to execute

if number => value to register



obj 

PUSH
stack.push(register_value)

ADD:
stack.pop() + register_value => register_value

PRINT:
registervalue logged to console
*/



function minilang(string) {
  let registerValue = 0;
  let stack = [];
  let ops = {
    'PRINT' : function () {
      console.log(registerValue);
    },
    'ADD' : function () {
      registerValue = stack.pop() + registerValue;
    },
    'PUSH' : function () {
      stack.push(registerValue);
    }
  }

  let functions = string.split(' ');

  // console.log(functions)
  functions.forEach(operation => {
    if (ops[operation] === undefined) {
      registerValue = parseInt(operation);
      
    } else {
      
      ops[operation]();
    }
  })


}

// let obj = {
//   'yes': function(){
//     console.log('yes');
//   }
// }


// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');

let string = 'Than\'ks."';

// console.log(string.split(' ').map(element => element.split('').filter (char => {
//   // console.log(char);
//   // console.log(',.'.includes(char))
//   return '\"\',.'.includes(char);
// })));

/*

Word to Digit

Input: String
Output: String

Explicit rules:
- number words change to Number

Implicit:
- returning new string as strings are mutable
- Figure out a way to handle words with punctuations (,'.;)

?'s
Expected that number words are always lowercase?
Always expect a separation between the words

Datastructures
Object mapping between number word : number
string => array via split to handle the words

Algorithm

initialized an object as such {"one" : 1, "zero" : 0 ...}

Find the number words in string
- Words are separated by spaces => convert string to array via split
words array
Iterate these words and transform via map number words that have matching key
If undefined value
- Extract number words from punctuation (just slice out last index)
- see if in object mapping => true -> return number + punctuation
if not then return original word
  
return string

*/

function wordToDigit(string = '') {
  const NUMBERS = {
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9
  }

  let words = string.split(' ');
  let modified = words.map(word => {
    if (NUMBERS[word] !== undefined) {
      return NUMBERS[word];
    } else {
      if (NUMBERS[word.slice(0, word.length - 1)] !== undefined) {
        return NUMBERS[word.slice(0, word.length - 1)] + word[word.length - 1];
      } else {
        return word;
      }
    }
  });

  return modified.join(' ');

}

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

/*

Practice Problem 1

Input: Array of numbers
Output: Array of numbers

Explicit:
- Return an array of numbers, where each element represents the count of numbers less than the element at the same index in the input array
- If a given number occurs multiple times in an array, it should only be counted once

Implicit:
-Size of the array determines size of array output
-Array input expected

?'s

Datastructures
- array to store return
- object or array to keep counts and ensure unique counting

Algorithm

Initialize an output array

Iterate the input array 
  let counter = []
  Nested loop to iterate array again an get count of less
  Checker  
  if (num < outer_num) 
    Avoiding dup count 
    counter.includes(num) => false -> push(num)

  outside the nested loop:
  counter.length add to output array at index outer loop

return an array 

*/

function smallerNumbersThanCurrent(numsArray) {
  let countArray = [];

  for (let idx = 0; idx < numsArray.length; idx += 1) {
    let counter = [];
    for (let sidx = 0; sidx < numsArray.length; sidx += 1) {
      if (numsArray[idx] > numsArray[sidx]) {
        if (!counter.includes(numsArray[sidx])) {
          counter.push(numsArray[sidx]);
        }
      }
    }
    countArray[idx] = counter.length;
  }

  return countArray;
}

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]


/*

Problem 2

Input: Array of Integers
Output: (Number)minimum sum of five consecutive integers, else null

Explicit rules:
- For the output, minimum sum can only be returned for at least 5 consecutive array elements, else return is null


Implicit: 
- length of array is less than five, return null


?'s
Is NaN a possible element and return value
- no, negatives are possible vals

Datastructures:
potentially slicing out from array to get sum
tracking of min sum with variable

Algorithm

if input array.length < 5 return null

min sum = max value

Compare sums of the possible 5 consecutive integers in array

Outer for loop that iterates till length - 4
  Determine the sum of 5 consecutive integers
    iterate and return 
  Compare sum to min sum
    if sum < min sum => reassign min sum = sum


return minimum sum

*/

function sumFive(array, index) {
  let sum = 0;
  let limit = index + 5;
  for (let j = index; j < index + 5; j += 1) {
    sum += array[j];
  }

  return sum;
}


// console.log(sumFive([1, 2, 3, 4, 5, -5], 1))

function minimumSum(arrayInts = []) {
  if (arrayInts.length < 5) return null;

  let minSum = Number.MAX_VALUE;

  let maxLength = arrayInts.length - 4;

  for (let i = 0; i < maxLength; i += 1) {
    let sum = sumFive(arrayInts, i);
    if (minSum > sum) {
      minSum = sum;
    }
  }

  return minSum;

}

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);


/*
Practice Problem 3

Input: String
Output: String

Explicit:
- output/return every 4th character in every second word converted to uppercase

- other characters remain the same

Implicit:
- Words not of length == 4 no modification
- words separated by space


?'S

DataStructures
string => array (for iteration)

Algorithm

const START_WORD = 1;
const FORUTH_START = 3;

Take input string => array via split(' ')

Iterate the array

starts at index = 1
Iterates increments += 2
up until length of array

For loop body execution
  element string 
  every 4th character to Uppercase
  split string => character array
  
    iteration of character array
    reassign elements at every 4th index to uppercase element
    starting at index = 3 
    increment += 4
    up until length of character array

  join those character elements
  reassing string element to modified string

join array of strings with (' ')

return string;
*/

function toWeirdCase (string) {
  const START_WORD = 1;
  const FORUTH_START = 3; 

  let words = string.split(' ');

  words.forEach( (word, index) => {
    if (index % 2 === 1) {
      
      let characters = word.split('');

      for (let i = 3; i < characters.length; i += 4) {
        characters[i] = characters[i].toUpperCase();
        
      }

      words[index] = characters.join('');
      
      
    }
  })

  console.log(words.join(' '))
  return words.join(' ');

}

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');


/*
Problem 4

Input: Array of Integers
Output: Array with 2 Integers

Explicit:
- return array with two numbers that are closet in value

Implicit:
- can compare closeness via subtraction
- numbers don't need to be next to each other

?'s
Can we assume that only one possible value? 
Based on examples yes

Datastructures
- Return Array
- Obj (key - diff : value array[two integers])

Algorithm

Compare each number to other numbers in array
Nested loop
  if not values at i = j (same index as outloop)
  Get abs diff (Math.abs())
  obj[abs diff] = [array[i], array[j]]

Get minimum key from object

min = Integer.MAX
Iterate the object (for in loop)
if key < min:
min = key;

return obj[min]

*/

function closestNumbers(array) {
  let diffs = {};

  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      let absDiff = Math.abs(array[i] - array[j]);
      if (diffs[absDiff] === undefined) {
        diffs[absDiff] = [array[i], array[j]];
      }
      

      
    }
  }



  let min = Number.MAX_VALUE;

  for (let diff in diffs) {
    if (Number(diff) < min) {
      min = Number(diff);
    }

  }

  return diffs[String(min)];
}

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]



/*

Problem 5

Input: String
Output: Character (String)

Explicit: 
-Return the character that occurs least often in the given string
-If there are multiple characters with same lowest number of occurrences, then return one that appears first in string
-Uppercase and lowercase version of characters are the same

Implicit:
-can be nonalphabetic like space
-return lowercase


?'s
Always have a return?

Data structures
- object => keep count of characters

Algorithm

Iterate the string
for loop
always lowercase character
object[character] if undefined => 1 else +1

Keep count of the characters

min variable - keep track of min
min index variable

iterate through string again
compare min to object[c]
min reassigned if above greater
and min index = index from for loop




Return lowercase character with lowest count (string[min index] = ensure first occurence)

*/

function leastCommonChar(string = '') {
  let counts = {};
  let min = Number.MAX_VALUE;
  let minIndex = 0;

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i].toLowerCase();
    if (counts[char] === undefined) {
      counts[char] = 1;
    } else {
      counts[char] += 1;
    }
  }

  // console.log(counts);



  for (let i = 0; i < string.length; i += 1) {
    let char = string[i].toLowerCase();
    if (min > counts[char]) {
      min = counts[char];
      minIndex = i;
    }
  }

  return string[minIndex].toLowerCase();
}

// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');


/*

Fibonacci Sequence

f(1) = 1
f(2) = 1
f(3) = 2
f(4) = 3

input: number
output: number

explicit:

input is 1 or 2 return is 1
input is greater than 2, then input is sum of last two number of fibonacci sequence

Datastructures


Algorithm


adding array argument ([1,1]) 
if (array[n - 1] !== undefined) {
  return array[n - 1];
}

array[n - 1] = function((n-1), array) + function(n - 2, array);

return array[n - 1];

evaluate input(n) if 1 or 2 return 1



n find the sum of the last two fibonacci numbers in the sequence
return function(n - 1) + function(n - 2);

with memoization

need to keep track with array



*/

function fibonacci(n) {
  return fibHelp(n);
}

function fibHelp(n, array = [1,1]) {
  if (array[n - 1] !== undefined) {
    return array[n - 1];
  }
  array[n - 1] = fibHelp(n - 1, array) + fibHelp(n - 2, array);

  return array[n - 1];
}
/*

Procedural

Datastructures 
Array

Algorithm

array already initialized to [1,1] and size till n for undefined fill with 0
modify length = n
use fill method (0, 2)

start iteration from 3rd element (i = 2) up til n
in each iteration you are accumulating sum of the previous 2 indexes and adding that value to current index

return last element of array


*/

function fibonacciP(n = 1) {
  let array = [1, 1];
  const NONSTARTNUM = 2;
  array.length = n;
  array.fill(0, NONSTARTNUM);
  


  for (let i = NONSTARTNUM; i < array.length; i += 1) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[array.length - 1];
}



// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


let obj = {'s' : []}

