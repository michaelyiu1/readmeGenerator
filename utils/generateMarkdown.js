// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
      1. [Installation](#installation)
      2. [Usage](#usage)
      3. [Contributing](#contributing)
      4. [Tests](#tests) 
      5. [License](#license)
      6. [Questions](#questions)
  
  ## Installation <a name="installation"></a>
  ${data.installation}
  
  ## Usage <a name="usage"></a>
  ${data.usage}
  
  ## Contributing <a name="contributing"></a>
  ${data.contributing}
  
  ## Tests <a name="tests"></a>
  ${data.test}
  
  ## License <a name="license"></a>
  ${data.license}
  
  ## Questions <a name="questions"></a>
  GitHub Profile: ${data.link}
  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
