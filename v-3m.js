//   Clear Loop, While Loop,  Do While Loop.

// Loop -> whatsapp, instagram, facebook,ecommerce,youtube

//  loop,  recursion

//  Print 1 To 22
// for (let i = 1; i <= 22; i++) {
//   console.log(i);
// }

// let number = 0;
// for (let i = number + 1; i <= 22; i++) {
//   console.log(i);
// }

// Print 23 To 55
// let number1 = Number(prompt("Enter Start Number"));
// let maxNumber = Number(prompt("Enter Your Maximum Number."));
// for (let i = number1; i <= maxNumber; i++) {
//   console.log(i);
// }

// 200 - 100
// let number2 = prompt("Enter Number Which decrement.");
// let minNumber = Number(prompt("Enter Minimum Number."));
// if (isNaN(number2) && isNaN(minNumber)) {
//   console.log("Accept Number Only");
// } else {
//   for (let i = number2; i >= minNumber; i--) {
//     console.log(typeof i);
//   }
// }

// Interview Based

// for(;;){
//     console.log("hello");
//     // It's Run In Loop
// }
// for(let i=0;;){
//     console.log("hello");
//     // It's Run In Loop
// }
// for(let i=0;i<10;){
//     console.log("hello");
//     // It's Run In Loop
// }

// let n = 5; // You can change this number
// for (let i = 0; i < n; i++) {
//     console.log("Hello World");
// }

// // /////////     1. Sum Of n Natural Number ///////////

// let pr = prompt("Kitne Number Tak Add Karwana Hai ?");

// if (pr === null) {
//   console.log("cencelled Prompt Input");
// } else {
//   let n = Number(pr);

//   if (isNaN(n)) {
//     console.log("Wrong Input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("nagative Number");
//     }
//   }
// }

////////////////////// 2. Factorial (*) Number ////////////////////////

// let pr = prompt("Enter A Number");

// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n < 0) {
//       console.log("Negative Number");
//     } else {
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     }
//   }
// }
///// Output :> 125 //////9

////////////////////// 2. Factorial of Number ////////////////////////

// let pr = prompt("Enter a Number");
// if (pr === null) {
//   console.log("cencelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Number");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//         console.log(i);
//       }
//     } else {
//       console.log("Correct Number ");
//     }
//   }
// }

////////////////////// 2. Find Prime Number ////////////////////////

let pr = prompt("Enter Number to Check Prime Number");
if (pr === null) {
  console.log("Cancelled");
} else {
  let n = Number(pr);
  if (isNaN(n)) {
    console.log("Invalid number");
  } else {
    if (n > 1) {
      let primeHai = true;
      for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          primeHai = false;
          break;
        }
      }
      if (primeHai) {
        console.log(n + " is a prime number");
      } else {
        console.log(n + " is not a prime number");
      }
    } else {
      console.log("Number should be greater than 1");
    }
  }
}
