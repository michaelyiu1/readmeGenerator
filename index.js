// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
['What will be the title of your README file?', 
'Enter a description for the README', 
'Enter installation instructions', 
'Enter Usage Information', 
'Enter Contribution Guidelines', 
'Enter Test Instructions',
'Paste the link to your Github Here',
'Enter your Email address'
];

// TODO: Create a function to initialize app
function init() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5]
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license, if desired',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Affero General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'link',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[7],
        }
    ])
    .then((data) => {
        const content = generateMarkdown(data);
        fs.writeFile('README.md', content, (err) =>
        err ? console.log(err) : console.log('Success')
        );
    })
}

// Function call to initialize app
init();
