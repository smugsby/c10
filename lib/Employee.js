//capital class names
class Employee {
    constructor(name,id,email){
    this.name=name;
    this.id=id;
    this.email=email;
    
    }
    //within class but outside of object to write method functions
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return Employee.name;
    }
    
}
module.exports= Employee