#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const range = await inquirer.prompt([
  {
    message: chalk.blue("Please enter min-range for computer to randomly select from?"),
    type: "number",
    name: "min",
  },
  {
    message: chalk.blue("Please enter max-range for computer to randomly select from?"),
    type: "number",
    name: "max",
  },
]);

const randomNumber =
  Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
const userGuessNumber = await inquirer.prompt([
  {
    type: "number",
    name: "userGuessdNumber",
    message: chalk.yellow("Guess a number between " + range.min + " to " + range.max + "\n"),
  },
]);

if (
  userGuessNumber.userGuessdNumber < range.min ||
  userGuessNumber.userGuessdNumber > range.max
) {
  console.log(chalk.red("Your guess ouside the range you defined. Please try again."));
} else if (userGuessNumber.userGuessdNumber === randomNumber) {
  console.log(chalk.blueBright("Congratulations! You guessed the correct number!"));
} else if (
  userGuessNumber.userGuessdNumber + 1 === randomNumber ||
  userGuessNumber.userGuessdNumber - 1 === randomNumber
) {
  console.log(
   chalk.green("Ohhh! you were so close....\ncomputer randomly seleted" + randomNumber)
  );
} else {
  console.log(
   chalk.redBright("Sorry you guessed wrong number....\ncomputer randomly seleted" +
      randomNumber)
  );
}