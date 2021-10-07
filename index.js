const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, description, installation, usage, license, contributing, tests, github, email }) =>
  `# Title
${title}

# Description
${description}

# Table of Contents
- [Installation]()
- [Usage]()
- [License]()
- [Contributing]()
- [Tests]()
- [Questions]()

# Installation
${installation}

# Usage
${usage}

# License
${license}

# Contributing
${contributing}

# Tests
${tests}

# Questions
${github}
${email}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: `Choose your project's license:`,
        choices: ["MIT", "Apache", "GPL"],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
  ])
  .then((answers) => {
    const readmePageContent = generateReadme(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });