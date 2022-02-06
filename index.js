
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
        question: 'What is your team name?',
        name: 'teamName',
    },
    {
        type: 'list',
        question: 'Which type of team member would you like to add?',
        name: 'type',
        choices: ["Manager", "Intern", "Engineer", "Finish adding members"]

    }]












const message = `\n
Let's create your team profile website!

If you would like to add a photo of your teammate, please save the photo with ID.png in assets folder.
Please answer the questions bellow:
`
const promptUser = () => inquirer.prompt(initialQuestions);



const init = () => {
    promptUser()
        .then((answers) => {
            fs.writeFileSync('index.html', generateHTML(answers))
        })
        .then(() => {
            console.log(`\n-------------------------------------------------\n`);
            console.log('Your index.html file has been successfully created.');
            console.log(`\n-------------------------------------------------\n`);
        })
        .catch((err) => console.error(err));
}


console.log(message);
init();
