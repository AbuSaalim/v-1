// let a = Number(prompt("Enter Your Age."));
// console.log(a);

// if (isNaN(a)) {
//   console.log("Wrong Input");
// } else if (a < 18) {
//   console.log(`You'r age is: ${a}. You'r Child Please Go Home.`);
// } else if (a >= 18) {
//   console.log(`You'r age is: ${a} Ready For Voting. `);
// }

// Second Problem

// let amount = Number(prompt("Enter Your Total Amount."));
// let discAmount;
// // console.log(amount);

// if (isNaN(amount)) {
//   console.log("Wrong Input ");
// } else if (amount > 0 && amount < 5000) {
//   discAmount = 0;
// } else if (amount > 5000 && amount < 7000) {
//   discAmount = 5;
// } else if (amount > 7000 && amount < 8000) {
//   discAmount = 10;
// } else if (amount > 8000) {
//   discAmount = 20;
// }
// let finalAmount = Math.floor(amount - (discAmount * amount) / 100);
// console.log(finalAmount);

// third Problem

// let totalUnit = Number(prompt("Enter Unit Number"));
// console.log(totalUnit);

// let amount = 0;
// if (totalUnit > 400) {
//   amount = (totalUnit - 400) * 13;
//   totalUnit = 400;
// }
// if (totalUnit > 200 && totalUnit <= 400) {
//   amount = amount + (totalUnit - 200) * 8;
//   totalUnit = 200;
// }
// if (totalUnit > 100 && totalUnit <= 200) {
//   amount = amount + (totalUnit - 100) * 6;
//   totalUnit = 100;
// }
// amount = amount + totalUnit * 4;
// console.log(amount);

// 4. Problem

// let amount = Number(prompt("Enter A Number"));
// // let amount = 8499;

// // console.log(amount);

// if (amount >= 500) {
//   //   console.log(Math.floor(amount / 500));
//   console.log(`  500 notes : ${Math.floor(amount / 500)}`);

//   amount = amount % 500;
// }
// if (amount >= 200) {
//   //   console.log(Math.floor(amount / 200));
//   console.log(` 200 note: ${Math.floor(amount / 200)}`);
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   //   console.log(Math.floor(amount / 100));
//   console.log(` 100 note: ${Math.floor(amount / 100)}`);
//   amount = amount % 100;
// }
// if (amount >= 20) {
//   //   console.log(Math.floor(amount / 20));
//   console.log(`20 note: ${Math.floor(amount / 20)}`);
//   amount = amount % 20;
// }

//
//
//
// Ternary Operator  ? :

// 12 > 13 ? console.log("HOHOHOHHO") : console.log("NANANANA");

// console.log(122 > 14 ? "YESYEYSYES" : "NONONONON");

// let num = 0;
// console.log(num > 0 ? "positive" : num < 0 ? "Negative" : "Zero");

//
//
//
// switch

// let day = Number(prompt("Enter Number Only"));

// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// }

// let multi = Number(prompt("Enter Number Only"));

// switch (multi) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Wed");
//     break;
//   default:
//     console.log("Invalid");
// }

// switch (false) {
//   case 17 > 3:
//     console.log("Technalogiya");
//     break;
//   case 33 < 2:
//     console.log("Bad Technalogiya");
// }

// let num = 0.1 + 0.2;
// switch (num) {
//   case 0.3:
//     console.log("Hello");
//     break;
//   case 0.5:
//     console.log("Hey");
//     break;
//   default:
//     console.log("Invalid");
// }

// let value = Math.round((0.1 + 0.2) * 10) / 10;

// switch (value) {
//   case 0.3:
//     console.log("Matched case 0.3");
//     break;
//   default:
//     console.log("Default case");
// }
