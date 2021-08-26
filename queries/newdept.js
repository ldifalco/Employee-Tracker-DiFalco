const inquirer = require('inquirer');
const connect = require('../db/connection');
//prompt for creating a new dept
const newDeptPrompts = [
    {
        type: 'input',
        message: 'Enter new department name',
        name: 'department'
    }
];


const addDept = () => {
    inquirer
    .prompt(newDeptPrompts)
}

module.exports = addDept