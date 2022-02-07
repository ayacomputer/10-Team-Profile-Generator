
const inquirer = require('inquirer');
const fs = require('fs');
const { generateHeader,
    generateEngineer,
    generateIntern,
    generateManager,
    generateFooter, } = require('./dist/generateHTML');
const {
    initialQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions
} = require('./dist/questions');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


const message = `\n
★★★★★★★★TEAM PROFILE GENERATOR★★★★★★★★★★
----------------------------------------
Let's create your team profile website!
----------------------------------------

If you would like to add a photo of your teammate, 
please save the photo with ID.png in assets folder.
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
            fs.writeFileSync('index.html', generateHeader(data))

            switch (data.role) {
                case 'Manager':
                    return promptManager(data).then((data) => {
                        console.log('data', data);
                        fs.appendFileSync('index.html', generateManager(data));
                    });
                    break;
                case 'Engineer':
                    return promptEngineer(data).then((data) => {
                        console.log('data', data);
                        fs.appendFileSync('index.html', generateEngineer(data));
                    });
                    break;
                case 'Intern':
                    return promptIntern(data).then((data) => {
                        console.log('data', data);
                        fs.appendFileSync('index.html', generateIntern(data));
                    });
                    break;
                case 'Finish adding members':
                    return fs.appendFileSync('index.html', generateFooter());
                default:
                    return fs.appendFileSync('index.html', generateFooter());
            }
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
