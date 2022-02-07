// const validate = {
//     name: input => input !== '' ? true : "Please enter a name.",
//     school: input => input !== '' ? true : "Please enter a school name.",
//     officeNumber: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive number.",
//     id: input => Number.isInteger(Number(input)) && Number(input) > 0 ? true : "Please enter a positive number.",
//     email: input => input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+\@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi) ? true : "Please enter a valid email address.",
// }



const teamNameQuestion = [
    {
        type: 'input',
        message: 'What is your team name?',
        name: 'teamName',
        // validate: validate,
    }]

const roleQuestion = [
    {
        type: 'list',
        message: "Let's add a member. What is the role of the team member?",
        name: 'role',
        choices: ["Manager", "Intern", "Engineer", "Finish adding members"]

    }]

const managerQuestions = [

    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        // validate: validate,
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
        // validate: validate,
    },
    {
        type: "input",
        message: "Please enter the manager's email address.",
        name: "email",
        // validate: validate,
    },
    {
        type: "input",
        message: "Please enter the office number.",
        name: "officeNumber",
        // validate: validate,
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        // validate: validate,
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id",
        // validate: validate,
    },
    {
        type: "input",
        message: "Please enter the engineer's email address.",
        name: "email",
        // validate: validate,
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
        // validate: validate,
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "id",
        // validate: validate,
    },
    {
        type: "input",
        message: "Please enter the intern's email address.",
        name: "email",
        // validate: validate,
    },
    {
        type: "input",
        message: "What is the intern's school name.",
        name: "school",
        // validate: validate,
    },
]

module.exports = {
    teamNameQuestion,
    roleQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions

}