const prompt = require("prompt-sync")();

// process.stdout.write("Hello ");
// process.stdout.write("World");

// let n = prompt("Enter A Number : ");
// // let a = 5;
// for (let i = 0; i <= n; i++) {
//   //   console.log("*");
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write(" * ");
//   }
//   console.log();
// }

//////    1. Star Printing     ///////
/*
 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
 */

// let n = Number(prompt("Enter Number"));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    2. Number Printing     ///////

// let n = Number(prompt("Number : "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

//////    3. ascii Number Printing     ///////

// let n = Number(prompt("Number : "));
// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

//////    4. Star Printing (reverse)     ///////
/*
 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 *
 */

let n = Number(prompt("Enter Number"));

// for (let i = 1; i <= n; i++) {
//   /////   1  2   3  4  5
//   for (let j = i; j <= n; j++) {
//     /////   5  4   3  2  1
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    4. Star Printing (reverse) alernate solution     ///////

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
