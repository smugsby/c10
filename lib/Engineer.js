//bring in employee file
const Employee = require("./Employee");
//capital class names... parent child connections
class Engineer extends Employee {
    constructor(name,id,email,github){
    //copies base from employee package
    super(name,id,email);
    this.github=github;
    }
    //within class but outside of object to write method functions
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }
    
}
module.exports= Engineer