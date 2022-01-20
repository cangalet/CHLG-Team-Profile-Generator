const inquirer = require('inquirer');
const questions = require("./lib/questions");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const { employee } = require('./lib/questions');

// employee array
const employees = [];

function init() {
    inquirer.prompt(questions.manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager);
        console.log(employees);
    })
};

init();

