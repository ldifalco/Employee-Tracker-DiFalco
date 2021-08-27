const inquirer = require('inquirer');
const connect = require('../db/connection')

const newRolePrompts = [
{
        type: 'input',
        message: 'Name of new role',
        name: 'newRole'

},

{
        type: 'list',
        message: 'What department is this role a part of?',
        choices: [], 
        name: 'departmentRole'
},

{
        type: 'input',
        message: 'Role salary',
        name: 'roleSalary'
}
];


const createRole = () => {
        inquirer
        .prompt(newRolePrompts)
}


module.exports = createRole