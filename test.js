const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');

const addManager = () => inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Who is the manager of this team? (Required)',
        default: 'Manager',
        validate: nameInput => {
            if (nameInput) {
            return true;
            } else {
            console.log("Please enter the manager's name!");
            return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's ID. (Required)",
        default: '123',
        validate: idInput => {
            if (idInput) {
            return true;
            } else {
            console.log("Please enter the manager's ID!");
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email. (Required)",
        default: 'email@email.com',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
              return "You have to provide a valid email address!"
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number. (Required)",
        default: '15',
        validate: officeNumberInput => {
            if (officeNumberInput) {
            return true;
            } else {
            console.log("Please enter the manager's office number!");
            return false;
            }
        }
    },
]);

const addEmployee = employeeData => {
    console.log(`
=====================
Add a New Team Member
=====================    
`);
    // If there's no 'team' array property, create one
    if (!employeeData.teamMembers) {
        employeeData.teamMembers = [];
    }
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter their name!');
                      return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "Please enter their ID. (Required)",
                default: '123',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log("Please enter their ID!");
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter their email. (Required)",
                default: 'email@email.com',
                validate: (answer) => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!emailRegex.test(answer)) {
                      return "You have to provide a valid email address!"
                    }
                    return true
                }
            },
            {
                type: "list",
                name: "role",
                message: "Select their role.",
                choices: ["Engineer", "Intern"],
            },
            {
                // run only when user has selected engineer
                type: "input",
                name: "github",
                message: "What is their github?",
                when: (answers) => answers.role === "Engineer",
            },
            {
                // run only when user has selected intern
                type: "input",
                name: "school",
                message: "What is their school?",
                when: (answers) => answers.role === "Intern",
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another team member?',
                default: false
            }
            
        ])
        .then(employeeData => {
            console.log(employeeData)
        })
        .then(employeeData => {
            employeeData.teamMembers.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptProject(employeeData);
            } else {
                return employeeData;
            }
        });
};

addManager()
    .then(addEmployee)
    .then(employeeData => {
        console.log(employeeData)
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

const questions = {
    manager: [
        {
            type: "input",
            name: "name",
            message: 'Who is the manager of this team? (Required)',
            default: 'Manager',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log("Please enter the manager's name!");
                return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter the manager's ID. (Required)",
            default: '123',
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log("Please enter the manager's ID!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email. (Required)",
            default: 'email@email.com',
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(answer)) {
                    return "You have to provide a valid email address!"
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number. (Required)",
            default: '15',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                return true;
                } else {
                console.log("Please enter the manager's office number!");
                return false;
                }
            }
        },
    ],
    employee: [
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter their ID. (Required)",
            default: '123',
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log("Please enter their ID!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter their email. (Required)",
            default: 'email@email.com',
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(answer)) {
                    return "You have to provide a valid email address!"
                }
                return true
            }
        },
        {
            type: "list",
            name: "role",
            message: "Select their role.",
            choices: ["Engineer", "Intern"],
        },
        {
            // run only when user has selected engineer
            type: "input",
            name: "github",
            message: "What is your github?",
            when: (answers) => answers.role === "Engineer",
        },
        {
            // run only when user has selected intern
            type: "input",
            name: "school",
            message: "What is your school?",
            when: (answers) => answers.role === "Intern",
        },
        {
            // run only when user has selected manager
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            when: (answers) => answers.role === "Manager",
        },
    ],
};
    
module.exports = questions;