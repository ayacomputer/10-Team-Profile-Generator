
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// const validate = {
//     required: input => input !== '' ? true : "This field is required.",
//     name: input => input !== '' ? true : "Please enter a name.",
//     id: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive number.",
//     email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address.",
// }



const initialQuestions = [
    {
        type: 'input',
        message: 'What is your team name?',
        name: 'teamName',
    },
    {
        type: 'list',
        message: 'What is the role of the team member?',
        name: 'role',
        choices: ["Manager", "Intern", "Engineer", "Finish adding members"]

    }]

const managerQuestions = [

    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the manager's email address.",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the office number.",
        name: "officeNumber",
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the engineer's email address.",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the engineer's github username.",
        name: "github",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the intern's email address.",
        name: "email",
    },
    {
        type: "input",
        message: "What is the intern's school name.",
        name: "school",
    },
]










const message = `\n
Let's create your team profile website!

If you would like to add a photo of your teammate, please save the photo with ID.png in assets folder.
Please answer the questions bellow:
`
const promptUser = () => inquirer.prompt(initialQuestions);
const promptManager = () => inquirer.prompt(managerQuestions);
const promptEngineer = () => inquirer.prompt(engineerQuestions);
const promptIntern = () => inquirer.prompt(internQuestions);


let teamName = "";

const init = () => {
    promptUser()
        .then((data) => {
            console.log('data', data);
            teamName = data.teamName;
            switch (data.role) {
                case 'Manager':
                    return promptManager(data);
                    break;
                case 'Engineer':
                    return promptEngineer(data);
                    break;
                case 'Intern':
                    return promptIntern(data);
                case 'Finish adding members':
                    return "";
                default:
                    return "";
            }
        })
        .then((data) => {
            console.log('data', data);
            fs.writeFileSync('index.html', generateHTML(data))
        })
        .then(() => {
            console.log(`\n-------------------------------------------------\n`);
            console.log('Your index.html file has been successfully created.');
            console.log(`\n-------------------------------------------------\n`);
        })
        .catch((err) => console.error(err));
}

module.exports = teamName;

console.log(message);
init();
