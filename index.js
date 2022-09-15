const inquirer = require("inquirer");
const fs = require("fs/promises");
const path = require("path");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
//const { default: inquirer } = require("inquirer");
//output
const outputDir = path.resolve(__dirname, "dist")

const outputPath = path.join(outputDir, "team.html")
const render = require("./lib/HtmlGenerator")
//global array that gets filled up after prompts
let globalArray = []
//function to run prompt
const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is employee email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is employee number?"
        }
    ]).then(function (res) {
        //creates new object
        let manager = new Manager(res.employeeName, res.id, res.email, res.officeNumber);
        //pushes input to global array
        globalArray.push(manager); console.log(globalArray);
    })
}
//prompt intern
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is employee email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is employee number?"
        }
    ]).then(function (res) {
        let manager = new Manager(res.employeeName, res.id, res.email, res.officeNumber);
        globalArray.push(manager); console.log(globalArray);
    })
}
//prompt engineer
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is Engineer name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is employee email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is employee number?"
        }
    ]).then(function (res) {
        let manager = new Manager(res.employeeName, res.id, res.email, res.officeNumber);
        globalArray.push(manager); console.log(globalArray);
    })
}
//loop to decide input of 
const runLoop = () => {
    return inquirer.prompt
        ({
            type: "list",
            name: "nextEntry",
            message: "Is this a engineer, intern or finish?",
            choices: [
                {
                    name: "Engineer"
                },
                {
                    name: "Intern"
                },
                {
                    name: "Finish"
                },
            ]
        }).then((answers) => {
            if (answers.nextEntry == "Engineer") {
                //repeat with intern and finish
                return promptEngineer()
            }
            else if (answers.nextEntry == "Intern") {
                //repeat with intern and finish
                return promptIntern()
            }
            else if (answers.nextEntry == "Finish") {
                //kills prompts
            }
            //runs loop again if not killed    
        }).then((createdEmployee) => {
            if (createdEmployee) {
                return runLoop();
            }
        })
}

promptManager().then(() => {
    return runLoop()
}).then(() => {
    return fs.writeFile(outputPath, render(globalArray), "utf-8")
})
    .then(() => {
        console.log("Big Mackkie Jones Daddy-O!");
    })

