const inquirer = require('inquirer');
const connect = require('../db/connection');

const newDept = [
    {
        type: 'input',
        message: 'Enter new department name',
        name: 'department'
    }
];


const addDept = () => {
    inquirer
    .prompt(newDept)
}

module.exports = addDept