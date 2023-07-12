// TODO: Include packages needed for this application

// node modules
const fs = require("fs");
const inquirer = require("inquirer");

// linking page where Readme is developed
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions of the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What are the usage information of the project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines of the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions of the project?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Choose a license for your project",
    choices: ["USYD", "UNSW", "MIT", "GNU"],
    name: "licensing",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.MD Created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
