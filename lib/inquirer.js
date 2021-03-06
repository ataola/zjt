const inquirer = require('inquirer');

module.exports = {
  askCreateAppName: () => {
    const questions = [{
      name: 'name',
      type: 'input',
      message: 'Enter app name',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Pleace enter app name';
        }
      }
    }];
    return inquirer.prompt(questions);
  }
};