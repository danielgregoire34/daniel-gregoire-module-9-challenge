// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is your title?',
    },
    
    {
    type: 'input',
    name: 'description',
    message: 'Description of your application?',
    },
    {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Usage Information?',
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Contribution Guidelines?',
    },
    {
    type: 'input',
    name: 'testinstallation',
    message: 'Test Instructions?',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Which Liscense did you use?',
    choices:['Copyleft','permissive','Creative Commons','Public Domain'],
    },

])
.then((data) => {
    const filename = `index.md`;

    fs.writeFile(filename, writeToFile(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
/*
function writeToFile(fileName, data) {

}
*/

let writeToFile = (data) => {
    return `# ${data.title}
    
## Description
    ${data.description}

## Table of Contents

## Installation Instructions
    ${data.installation}

    
## Usage Information
    ${data.usage}


## Contribution Guidlines----
    ${data.contribution}


## Test Installation---- 
    ${data.testinstallation}
    
## Licenses----
    ${data.license}
    
    
    `

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
