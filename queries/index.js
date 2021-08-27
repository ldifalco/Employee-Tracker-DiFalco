const inquirer = require('inquirer');
const viewDepartments = require('./viewDepartment');
const viewRoles = require("./viewRole");
const viewEmployees = require('./viewEmployee')
const addDept = require('./newDept');
const addRole = require('./newRole');
const addEmployee = require('./newEmployee');
const updateEmployee = require("./updateEmployee");


const startList = [
    {
        type: 'list',
        message: 'Please Make A Selection',
        choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add role', 'Add employee', 'Update employee role'],
        name: 'startList'
    }
];

const launch = () => {
    inquirer
        .prompt(startList)
        .then(response => {
            console.log(response);
            if (response.startList === 'View departments') {
                viewDepartments();
            } else if (response.startList === "View roles") {
                viewRoles();
            } else if (response.startList === "View employees") {
                viewEmployees();
            } else if (response.startList === 'Add department') {
                addDept();
            } else if (response.startList === 'Add role') {
                addRole();
            } else if (response.startList === 'Add employee') {
                addEmployee();
            } else if (response.startList === "Update employee role") {
                updateEmployee();
            }
        })
};

module.exports = launch