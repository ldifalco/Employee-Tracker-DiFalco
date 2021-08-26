const inquirer = require('inquirer');
const connect = require('../db/connection');
//User will enter employee name, roles and manager.
const newEmployeePrompts = [
    {
        type: 'input',
        message: 'Employee first name',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'Employee last name',
        name: 'lastName'
    },
    {
        type: 'list',
        message: 'Employee Role',
        choices: [], //pulls roles table to display
        name: 'role'
    },
    {
        type: 'list',
        message: 'Employee Manager',
        choices: [], //displays manager choices
        name: 'manager'
    }

];   


const addEmployee = () => {
    inquirer
    .prompt(newEmployeePrompts)
    
}

module.exports = addEmployee