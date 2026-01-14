# Understanding Project Management in Node.js

## a. Package Managers

### What is a Package Manager?
A package manager is a tool for developers to **install, update, remove, and manage external libraries (packages)**. These packages contain reusable code written by other developers, which saves time and effort.

### Problems faced if package managers are not used
If package managers are not used:
- Developers must manually download and copy libraries
- Version conflicts may occur
- It difficult to track which libraries are used
- Project setup becomes slow and error-prone

## b. NPM (Node Package Manager)

### What is NPM?
NPM is the **default package manager of Node.js**. It allows developers to install and manage third-party libraries for Node.js applications.

### Why is NPM important for Node.js?
NPM is important because:

- It provides access to a large ecosystem of open-source libraries.
- It handles version control of packages
- It helps maintain project structure and consistency.

## c. Backend Project Initialization

### What is the command used to initialize a backend (Node.js) project?
The command used is:
`npm init`

### Explain what npm init and npm init -y do
**npm init**
This command starts an interactive process. It asks questions about the project such as name, version, author, etc.
- Creates a package.json file based on user input.

**npm init -y**
- Skips all questions
- Automatically creates `package.json` with default values

