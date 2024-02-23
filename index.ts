import inquirer from "inquirer";
import chalk from "chalk";

interface TransactionDetails {
  userId: string;
  userpin: number;
  accountType: string;
  transactionType: string;
  amount?: number;
  withdrawMethod?: number;
}

async function main() {
  const answer: TransactionDetails = await inquirer.prompt([
    {
      type: "input",
      name: "userId",
      message: chalk.yellow("Enter Your Id.....\n"),
    },
    {
      type: "number",
      name: "userpin",
      message: chalk.yellow("Enter Your PIN......\n"),
    },
    {
      type: "list",
      name: "accountType",
      choices: ["currenttype", "saving"],
      message: chalk.yellow("Select your account......\n"),
    },
    {
      type: "list",
      name: "transactionType",
      choices: ["fast cash", "withdraw"],
      message: chalk.yellow("Select your transaction......\n"),
    },
    {
      type: "list",
      name: "amount",
      choices: [5000, 7000, 20000, 25000],
      message: chalk.yellow("Select your amount......\n"),
      when: (answer) => answer.transactionType === "fast cash",
    },
    {
      type: "number",
      name: "withdrawMethod",
      message: chalk.yellow("Select your withdrawal method......\n"),
      when: (answer) => answer.transactionType === "withdraw",
    },
  ]);

  console.log(chalk.green("Transaction Details:"), answer);
}

main();


