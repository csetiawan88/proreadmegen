// Generate Markdown for README

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//"USYD", "UNSW", "MIT", "GNU"
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //license Badge
  let licenseOption = `${data.licensing}`;
  let licenseLink = "";
  //if conditional to give the license the correct link
  if (licenseOption === "UNSW") {
    licenseOption = "UNSW";
    licenseLink = "https://www.myit.unsw.edu.au/services/students";
  }
  if (licenseOption === "USYD") {
    licenseOption = "USYD";
    licenseLink =
      "https://www.sydney.edu.au/engage/industry-business-partnerships/license-our-intellectual-property.html";
  }
  if (licenseOption === "MIT") {
    licenseOption = "MIT";
    licenseLink =
      "https://tlo.mit.edu/learn-about-intellectual-property/software-and-open-source-licensing/open-source-licensing";
  }

  if (licenseOption === "GNU") {
    licenseOption = "GNU";
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  }

  //Generate Readme from user input
  return `# ${data.title}
  
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
