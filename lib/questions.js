const questions = {
    // manager questions
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
    // employee questions
    employee: [
        {
            type: "checkbox",
            name: "option",
            message: "Would you like to add an Engineer or Intern to the team? (Required - Please select one option)",
            choices: ["Engineer", "Intern"],
            validate(answer) {
                if (answer.length < 1) {
                  return 'You must choose an option.';
                }
          
                return true;
            },
        },
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
            // run only when user has selected engineer
            type: "input",
            name: "github",
            message: "What is your github?",
            when: (answers) => answers.option[0] === 'Engineer',
        },
        {
            // run only when user has selected intern
            type: "input",
            name: "school",
            message: "What is your school?",
            when: (answers) => answers.option[0] === "Intern",
        },
    ],
};
  
module.exports = questions;