#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234; //ATM Password

// asking user for Password

let pinAnswer = await inquirer.prompt([
  { name: "pin", message: "Enter your pin", type: "number" },
]);

// If user confirms password

if (pinAnswer.pin === myPin) {
  console.log("Welcome to  your Account");

  //user get options

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["Withdraw", "Balance Enquiry", "Fast Cash"],
    },
  ]);

  //for Withdraw

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;

      console.log(`Withdrawn ${amountAns.amount} from your account.`);
      console.log(`Your remaining Balance is ${myBalance}`);
    }
    //for Fast Cash
  } else if (operationAns.operation === "Fast Cash") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["500", "1000", "2000", "5000", "10000", "20000"],
        message: "Enter your amount",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;

      console.log(`Withdrawn ${amountAns.amount} from your account.`);
      console.log(`Your remaining Balance is ${myBalance}`);
    } else {
      console.log("Insufficient Balance");
    }

    //for Balance Enquiry
  } else if (operationAns.operation === "Balance Enquiry") {
    console.log(`Your Current Balance is ${myBalance}`);
  }
}

//if user enter incorrect password
else console.log("Incorrect Pin code");
