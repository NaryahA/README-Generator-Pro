// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests are included?',
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md has been generated!');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      // User name input
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      // User README title input
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // User README description input
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      // User README installation instructions input
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      // User README usage information input
      {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
      },
      // User README contribution guidelines input
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      // User README test instructions input
      {
        type: "input",
        message: "Add the test instructions of your project:",
        name: "test",
      },
      // User README licensing options
      {
        type: "list",
        message: "Select the type of license you would like for your project:",
        choices: [
          "MIT",
          "Apache 2.0 License",
          "IBM Public License Version 1.0",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
        name: "license",
      },
      // User github handle input
      {
        type: "input",
        message: "What is your GitHub handle?",
        name: "github",
      },
      // User email handle input
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    // .then takes the user inputs from the prompts answered above and injects them into the writeToFile function, therefore generating a "sample-README.md" file with the users inputs
    .then((data) => {
      const markdown = generateMarkdown(data)
      writeToFile("sample-README.md", markdown);
    });

}

// Function call to initialize app
init();
