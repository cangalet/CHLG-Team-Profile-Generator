const inquirer = require('inquirer');
const questions = require("./lib/questions");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

// employee array
const employees = [];

// function to ask to add more employees to team
function addTeamMember() {
    inquirer
        .prompt({
            type: "confirm",
            name: "again",
            message: "Would you like to add another employee?",
        })
        .then(function (addAnother) {
            // if they do, rerun the ?s
            if (addAnother.again == true) {
            teamBuilder();
            }
            //   if not, render the employees
            if (addAnother.again == false) {
                console.log(employees)
                writeFile(generatePage(employees));
                copyFile();
            }
        })
}   

// function to handle build out team
function teamBuilder() {
    inquirer.prompt(questions.employee).then(answers => {
        if (answers.option[0] === 'Engineer') {
            employees.push(
                new Engineer(answers.name, answers.id, answers.email, answers.github)
            );
            addTeamMember(); 
        };
        if (answers.option[0] === "Intern") {
            employees.push(
                new Intern(answers.name, answers.id, answers.email, answers.school)
            );
            addTeamMember();  
        }
    });
}

// function to handle manager's setup
function init() {
    return inquirer.prompt(questions.manager).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employees.push(manager);
    })
};

init().then(teamBuilder);

