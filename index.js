// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
function init() 
    function init() {
        inquirer.prompt(questions)
          .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile('README.md', markdown);
          })
          .catch((error) => {
            console.error('Error initializing app:', error);
          });
}

// Function call to initialize app
init();
