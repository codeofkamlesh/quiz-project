#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "which operator is used to check equality of two values with its data type ?",
        choices: ["<=", "==", "!=", "==="]
    },
    {
        name: "Question_2",
        type: "list",
        message: "what do we use for repeatative task ?",
        choices: ["conditions", "loops", "logical operators", "N.O.T"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "which language is the superset of javascript ?",
        choices: ["HTML", "CSS", "Python", "Typescript"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "which language is not understood by browser ?",
        choices: ["javascript", "python", "Typescript", "Nodejs"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "In typescript which symbol is used to terminate the statement ?",
        choices: [";", ".", "!", ","]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "===":
        console.log("Q1 Correct Answer");
        ++score;
        break;
    default:
        console.log("Q1 wrong Answer");
}
switch (quiz.Question_2) {
    case "loops":
        console.log("Q2 Correct Answer");
        ++score;
        break;
    default:
        console.log("Q2 wrong Answer");
}
switch (quiz.Question_3) {
    case "Typescript":
        console.log("Q3 Correct Answer");
        ++score;
        break;
    default:
        console.log("Q3 wrong Answer");
}
switch (quiz.Question_4) {
    case "Typescript":
        console.log("Q4 Correct Answer");
        ++score;
        break;
    default:
        console.log("Q4 wrong Answer");
}
switch (quiz.Question_5) {
    case ";":
        console.log("Q5 Correct Answer");
        ++score;
        break;
    default:
        console.log("Q5 wrong Answer");
}
console.log(`your score is ${score}`);
