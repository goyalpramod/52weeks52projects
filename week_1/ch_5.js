// Question 1 Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of
// the original arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// let newArray = arrays.reduce((a,b) => a.concat(b));
// console.log(newArray)



// Question 2 Your own loop
// Write a higher-order function loop that provides something like a for
// loop statement. It should take a value, a test function, an update
// function, and a body function. Each iteration, it should first run the
// test function on the current loop value and stop if that returns false.
// It should then call the body function, giving it the current value, and
// finally call the update function to create a new value and start over
// from the beginning.
// When defining the function, you can use a regular loop to do the
// actual looping.

// const loop = (value, test, update, body) => {
// while (value != 0){
// if (test(value) == false){
//   break;
// }
//   body(value);
//   value = update(value);
//    };
//   };

// loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1





// Question 3 Everything
// Arrays also have an every method analogous to the some method. This
// method returns true when the given function returns true for every
// element in the array. In a way, some is a version of the || operator that
// acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate
// function as parameters. Write two versions, one using a loop and one
// using the some method.



function every(array, test) {
  // Your code here.
  for (let element of array){
    if (test(element) == false){
      return false;  
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true





// Question 4 Dominant writing direction
// Write a function that computes the dominant writing direction in a
// string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top
// to bottom).
// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript
// and countBy functions defined earlier in the chapter are probably useful
// here.
