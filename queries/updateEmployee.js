const inquirer = require('inquirer');
const connect = require('../db/connection');

const update = [
    {
        type: 'list',
        message: 'Choose an Employee to update',
        choices: [], 
        name: 'employeeUpdate'
    },
    {
        type: 'list',
        message: 'Choose a role for this employee',
        choices: [],
        name: 'roleUpdate'
    }
];

const updateEmployee = () => {
    inquirer
    .prompt(update)
    
}

module.exports = updateEmployee