
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

const readline = require('readline-sync');

let nums = [];

for (let i = 1; i < 7; i += 1) {
  if (i === 6) {
    let last = readline.question('Enter the last number: ');
    nums.push(last);
  } else {
    let num = readline.question(`Enter the ${i}th number: `);
    nums.push(num);
  }
}

let end = nums[nums.length - 1];
if (nums.slice(0, 5).includes(end)) {
  console.log(`The number ${end} appears in ${nums.slice(0,5)}`);
} else {
  console.log(`The number ${end} does not appear in ${nums.slice(0,5)}`);
}
