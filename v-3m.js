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

// let n = 55;
// for (let i = 0; i < n; i++) {
//   console.log("Hello World");
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

////////////////////// 2. Factor of Number ////////////////////////

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

// let pr = prompt("Enter Number to Check Prime Number");
// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else {
//     if (n > 1) {
//       let primeHai = true;
//       for (let i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           primeHai = false;
//           break;
//         }
//       }
//       if (primeHai) {
//         console.log(n + " is a prime number");
//       } else {
//         console.log(n + " is not a prime number");
//       }
//     } else {
//       console.log("Number should be greater than 1");
//     }
//   }
// }

//// Alternate /////

// let pr = prompt("Enter Number");
// if (pr === null) {
//   console.log("Cencelled");
// } else {
//   let n = Number(pr);
//   if (n >= 0) {
//     console.log(isPrime(n));
//   } else {
//     console.log("Negative Number");
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// //////////      LETS START WHILE LOOP    /////////////

// 15654 % 10
// 4

// 15654 / 10
// 1565

// let ans = prompt("Kuch Bhi Dedo.  (Prompt Band Karna Hai To exit likh lo) ");
// if (ans === null) {
//   console.log("Cancelled Prompt Input");
// }
// while (ans !== "exit" && ans !== "Exit" && ans !== "EXIT") {
//   // console.log(ans);
//   prompt("Kuch Bhi Dedo.  (Prompt Band Karna Hai To exit likh lo) ");
// }

// let pr = prompt("Enter Number to Sum of Natural Number");
//  if (pr === null) {
//    console.log("Cancelled Prompt Input");
//  }
//   else {
//     let n = Number(pr);
//     if (isNaN(n)) {
//       console.log("Wrong Input");
//     } else {
//       if (n > 0) {
//         let sum = 0;
//         let i = 1;
//         while (i <= n) {
//           sum = sum + i;
//           i++;
//         }
//         console.log(sum);
//       } else {
//         console.log("nagative Number");
//       }
//     }
//   }

// let pr = Number(prompt("Enter a Number"));
// let pr = 4321;

// if (pr === null) {
//   console.log("Cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input");
//   } else {
//     if (n > 0) {
//       let reverse = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         reverse = reverse * 10 + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(reverse);
//     } else {
//       console.log("Should be +ve and  more then 0");
//     }
//   }
// }

// let pro = 145;
// let pro = prompt("ENter Number TO See Bold Number");

// if (pro === null) {
//   console.log("cencelled");
// } else {
//   let n = Number(pro);
//   if (isNaN(n)) {
//     console.log("Don't Use String");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       let copy = n;
//       while (n > 0) {
//         let rem = n % 10;
//         let fact = 1;
//         for (let i = 1; i <= rem; i++) {
//           fact *= i;
//         }
//         sum += fact;
//         n = Math.floor(n / 10);
//       }
//       if (copy === sum) {
//         console.log(
//           `This is Strong Number, Because Your Number is: ${copy} Answer is: ${sum} `
//         );
//       } else {
//         console.log(`This is Not A Strong Number  ${sum}`);
//       }
//     } else {
//       console.log("Number Not Correct, plases enter Number 0+");
//     }
//   }
// }

//////         Guess The Number /////////

// let computer = Math.floor(Math.random() * 10);
// console.log(computer);

// while (n !== computer) {
//   let pr = prompt("Enter A Number For Guess Number");
//   if (pr === null) {
//     console.log("cancelled");
//   } else {
//     let n = Number(pr);
//     if (isNaN(n)) {
//       console.log("String Not Exepted. Please Enter Number");
//     }
//   }

//   if (computer > n) {
//     console.log("Your Number Is Hight : " + n);
//   } else if (computer < n) {
//     console.log("Your Number Is Low : " + n);
//   } else if (computer === n) {
//     console.log(`Congratulation!🎉🎉 number is Match. `);
//   }
// }

//////////      Gues the Random Number /////////////////

// let random = Math.floor(Math.random() * 100) + 1;

// let guess = -1;

// while (guess !== random) {
//   guess = Number(prompt("Guess the number"));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("try again b/w 1 - 100");
//     continue;
//   }
//   if (guess > random) {
//     console.log("Your Number Is Hight : " + guess);
//   } else if (random < guess) {
//     console.log("Your Number Is Low : " + guess);
//   } else {
//     console.log(`Congratulation!🎉🎉 number is Match. ${guess} `);
//   }
// }

//////           Alter Nate Guess Number /////////////

// let random = Math.floor(Math.random() * 100) + 1;

// let guess = -1;

// while (guess !== random) {
//   guess = Number(prompt("Guess the number between 1 and 100"));

//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     console.log("Try again between 1 - 100");
//     continue;
//   }

//   if (guess > random) {
//     console.log("Your number is High: " + guess);
//   } else if (guess < random) {
//     console.log("Your number is Low: " + guess);
//   } else {
//     console.log(`🎉 Congratulations! Number matched: ${guess}`);
//   }
// }

function Recontinue() {
  let checkOperation = Number(
    prompt(
      "Enter 1 for Addition, Enter 2 for Substraction, Enter 3 for multipication, Enter"
    )
  );

  if (isNaN(checkOperation) || checkOperation < 0 || checkOperation === null) {
    console.log("Try Again");
  } else {
    if (checkOperation === 1) {
      let a = Number(prompt("Enter First Number for Addition"));
      let b = Number(prompt("Enter Second Number for Addition"));
      let c = a + b;
      console.log(`Addition Answer is: ${c}`);
    } else if (checkOperation === 2) {
      let a = Number(prompt("Enter First Number for subtraction"));
      let b = Number(prompt("Enter Second Number for subtraction"));
      let c = a - b;
      console.log(`Subtraction Answer is: ${c}`);
    } else if (checkOperation === 3) {
      let a = Number(prompt("Enter First Number for Multiplication"));
      let b = Number(prompt("Enter Second Number for Multiplication"));
      let c = a * b;
      console.log(`Multiplication Answer is: ${c}`);
    } else {
      console.log("Enter b/w 1 to 3");
    }
  }
}

let continue1 = prompt("Continue then Type Yes");
if (continue1 == "yes") {
  Recontinue();
}
