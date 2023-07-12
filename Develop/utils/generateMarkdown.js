// Generate Markdown for README

// Licence Badge
const licenseBadgeLinks = require("./licenseBadges.js");

function generateMarkdown(data) {
  data.licenseBadge = licenseBadgeLinks[data.licensing];

  //Generate Readme from user input
  return `# ${data.title}

  ${data.licenseBadge}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage Instructions](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

  ## Description 
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License 
  ${data.licensing}

  ## Questions (How to reach me with additional questions)
  GitHub: https://github.com/${data.github}.
  Email: ${data.email}. 
`;
}
module.exports = generateMarkdown;
