
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./dist/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');



const questions = [
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },
    {
        type: '',
        question: '',
        name: '',
    },

]



const message = `\n
Let's create your team profile website!

If you would like to add a photo of your teammate, please save the photo with ID.png in assets folder.
Please answer the questions bellow:
`
const promptUser = () => inquirer.prompt(questions);



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
