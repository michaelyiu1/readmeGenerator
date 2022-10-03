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
      1. installation
      2. usage
      3. contributing
      4. tests
      5. license
      6. questions
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## License
  ${data.license}
  
  ## Questions
  GitHub Profile: ${data.link}
  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
