
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
