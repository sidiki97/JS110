function joinOr(arr, sep, and) {
  if (arr.length > 2) {
    if (sep) {
      let str = arr.join(sep);
      if (and){
        return str.slice(0, str.length - 1) + and + ' ' + str[str.length - 1];
      }
      return str.slice(0, str.length - 1) + 'or ' + str[str.length - 1];
    } else {
      let str = arr.join();
      return str.slice(0, str.length - 1) + ' or ' + str[str.length - 1];
    }

    
  } else if (arr.length === 2) {
    return arr[0] + ' or ' + arr[1];
  }

  return arr.join()
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

console.log('yessss');