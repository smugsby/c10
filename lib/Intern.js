//bring in employee file
const Employee = require("./Employee");
//capital class names... parent child connections
class Intern extends Employee {
    constructor(name,id,email,school){
    //copies base from employee package
    super(name,id,email);
    this.school=school;
    }
    //within class but outside of object to write method functions
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
    
}
module.exports= Intern