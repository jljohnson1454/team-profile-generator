const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const htmlHelper = require('./src/htmlHelper');

const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const teamArray = [];


const promptManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your manager name?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message: 'What is the manager id?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide manager email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter office id",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office ID');
                    return false;
                }}
        },
    ]).then(managerData => {
        
        let manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber,
        managerData.role,
        )
        
        teamArray.push(manager)
        
        addEmployee();
        //writeToFile(htmlHelper) 
    });

}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: "Choose the role of the next employee",
            choices: [ 'Engineer', 'Intern', 'None']
        }]).then(employeeData => {
            if(employeeData.role === 'Engineer'){
                promptEngineer();
            } else if(employeeData.role === 'Intern') {
                promptIntern();
            } else if(employeeData.role === 'None') {
                writeToFile();
                //Will need to pass in the team members array here
            }
        })

}
    
        
const promptEngineer = () => {    
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message: 'What is the engineer id?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter engineer ID');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'git',
            message: ["Please enter the git username"],
            validate: gitInput => {
                if(gitInput) {
                    return true;
                } else {
                    console.log('Please enter git username!');
                    return false;
                }}
        }

    ]).then(engineerData =>{
        let engineer = new Engineer(
            engineerData.name,
            engineerData.id,
            engineerData.email,
            engineerData.git,
            engineerData.role)
            
            teamArray.push(engineer)
            
            addEmployee();

    });
}

const promptIntern = () => {
     inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message: 'What is employee id?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter employee ID');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter email');
                    return false;
                }}
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your school name",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please enter school name!');
                    return false;
                }}    
        }
    ])
    .then(internData =>{
        let intern = new Intern(

        internData.name,
        internData.id,
        internData.email,
        internData.school,
        internData.role,
        )

        teamArray.push(intern);

        addEmployee();
    })

}

// TODO: Create a function to write HTML file
function writeToFile() {
    var htmlPath = path.join(__dirname, '/dist', 'index.html');

    fs.writeFileSync(htmlPath, htmlHelper(teamArray), 'utf-8');
    console.log(teamArray)

}

function init() {
    promptManager();
}

init();
