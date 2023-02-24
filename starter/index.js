const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer.prompt([
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'Github project',
        },
        {
          type: 'input',
          message: 'What is your project description?'
          name: 'description',
         },
        {
            type: 'input',
            message: 'what is license?',
            name: 'table',
          },
        {
          type: 'input',
          message: 'what are you contributing guidelines for your project?',
          name: 'github',
        },
        {
            type: 'input',
            message: 'what is your linkedin url?',
            name: 'linkedin',
          },

          {
            type: 'input',
            message: 'what is table of contents?',
            name: 'table',
          },
        {
          type: 'input',
          message: 'what is your github url?',
          name: 'github',
        },
      ])
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
