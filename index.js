
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const { generateHeader,
    generateEngineer,
    generateIntern,
    generateManager,
    generateFooter, } = require('./dist/generateHTML');
const {
    teamNameQuestion,
    roleQuestion,
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
const promptTeamName = () => inquirer.prompt(teamNameQuestion);
const promptRole = () => inquirer.prompt(roleQuestion)
const promptManager = () => inquirer.prompt(managerQuestions);
const promptEngineer = () => inquirer.prompt(engineerQuestions);
const promptIntern = () => inquirer.prompt(internQuestions);

const addingMember = async (data) => {

    promptRole(data).then((data) => {
        switch (data.role) {
            case 'Manager':
                return promptManager(data).then((data) => {
                    fs.appendFileSync('index.html', generateManager(data));
                    addingMember();
                });
                break;
            case 'Engineer':
                return promptEngineer(data).then((data) => {
                    fs.appendFileSync('index.html', generateEngineer(data));
                    addingMember();
                });
                break;
            case 'Intern':
                return promptIntern(data).then((data) => {
                    fs.appendFileSync('index.html', generateIntern(data));
                    addingMember();
                });
                break;
            case 'Finish adding members':
                return fs.appendFileSync('index.html', generateFooter());
            default:
                return fs.appendFileSync('index.html', generateFooter());
        }

    })
}





const init = () => {
    promptTeamName()
        .then((data) => {
            fs.writeFileSync('index.html', generateHeader(data))
        }).then((data) => { addingMember(data); }).then(() => {
            console.log(chalk.green(`\n-------------------------------------------------\n`));
            console.log(chalk.blue('Your index.html file has been successfully created.'));
            console.log(chalk.green(`\n-------------------------------------------------\n`));
        })
        .catch((err) => console.error(err));
}


console.log(chalk.blue(message));
init();
