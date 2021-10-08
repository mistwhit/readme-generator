const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({ title, githubRepo, description, installation, usage, license, contributing, tests, github, email }) =>
  `![License: ${license}](https://img.shields.io/github/license/${github}/${githubRepo})
# ${title}

## Description
${description}

## Table of Contents
- [Installation](https://github.com/${github}/${githubRepo}#installation)
- [Usage](https://github.com/${github}/${githubRepo}#usage)
- [License](https://github.com/${github}/${githubRepo}#license)
- [Contributing](https://github.com/${github}/${githubRepo}#contributing)
- [Tests](https://github.com/${github}/${githubRepo}#tests)
- [Questions](https://github.com/${github}/${githubRepo}#questions)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
You can find me at www.github.com/${github}. Feel free to email me at ${email} if you have any questions.`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'githubRepo',
      message: 'What is the name of your GitHub repository? Include dashes!',
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