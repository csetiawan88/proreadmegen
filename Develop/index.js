// Include packages needed for this application
// Install node modules and also need to install inquirer to be able to run the program. Run the command “npm install inquirer”
const fs = require("fs");
const inquirer = require("inquirer");

// linking to where Readme generated
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
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
  // User need to select licence from list of options
  {
    type: "rawlist",
    message: "Choose a license for your project (Enter 1 - 4)",
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

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.MD Created");
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
