
const path = require('path');

let projectDirectory = String.raw`\\10.1.10.11\Results`;

module.exports = {
    DirectoryManager: function(projectName) {
        console.log(projectDirectory);
        console.log("Project Name: " + projectName);

    } 
};