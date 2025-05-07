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

// let n = Number(prompt("Enter Number"));

// for (let i = 1; i <= n; i++) {
//   /////   1  2   3  4  5
//   for (let j = i; j <= n; j++) {
//     /////   5  4   3  2  1
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    4. Star Printing (reverse) alernate solution     ///////

// let n = Number(prompt("Enter Number"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    4. Star Printing (reverse) alernate solution     ///////

// let n = Number(prompt("Enter Number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("_ ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    5. Star Printing (reverse) alernate solution     ///////

// let n = Number(prompt("Enter Number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//////    5. Star Printing X      ///////

// let n = Number(prompt("Enter A Number : "));
// for (let i = 1; i <= n; i++) {
//   // process.stdout.write(`${i} or ${n}`);
//   //   console.log(`${i}, ${n}`);
//   for (let j = 1; j <= n; j++) {
//     if (i === j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//////    6. Star Printing V      ///////

// let n = Number(prompt("Enter A Number : "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (i === j || i + j == 2 * n) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//////    7.  square hollow pattern       ///////
// let n = Number(prompt("Enter a Number : "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == 1 || i == n || j == 1 || j == n) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// //////    8.  Number Triangular       ///////
// let n = Number(prompt("Enter a Number"));

// for (let i = 1; i <= n; i++) {
//   //   process.stdout.write(i + " ");
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= n; k++) {
//     process.stdout.write(i + "");
//   }
//   console.log();
// }

///////    8. Number Increment Pyramid    ///////////////
// let n = Number(prompt("Enter A Number : "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// ///////    8. Number Increment Reverse Pyramid    ///////////////
// let n = Number(prompt("Enter A Number : "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n -i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

///////    9. Number changing Pyramid    ///////////////
// let n = Number(prompt("Enter A Number : "));
// let currenStatus = 1;
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${currenStatus++} `);
//   }
//   console.log();
// }

///////    10. Zero One Triangle    ///////////////

let n = Number(prompt("Enter A Number : "));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // process.stdout.write("* ");
    if ((i + j) % 2 == 0) {
      process.stdout.write(1 + " ");
    } else {
      process.stdout.write(0 + " ");
    }
  }
  console.log();
}
