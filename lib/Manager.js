//bring in employee file
const Employee = require("./Employee");
//capital class names... parent child connections
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    //copies base from employee package
    super(name,id,email);
    this.officeNumber=officeNumber;
    }
    //within class but outside of object to write method functions
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    
}
module.exports= Manager