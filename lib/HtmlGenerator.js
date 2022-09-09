const fs = require("fs");
const path = require("path");
//const srcDir = path.resolve(_dirname, "../src/")
//render outline- repeat for intern and engineer
const renderManager = (manager) => `
<div>
${manager.getName()}
${manager.getId()}
${manager.getEmail()}
${manager.getOfficeNumber()}
${manager.getRole()}
</div>
`
//end render outline
module.exports = (employees) => {
    //cycle through array to find manager...\n=<br>
    const managerHtml = employees.filter(employee => employee.getRole() == "Manager").map(renderManager).join("\n")
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${managerHtml}
    
</body>
</html>
    `
};