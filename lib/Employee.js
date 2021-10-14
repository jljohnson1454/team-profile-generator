// function Employee (name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;

//     console.log(name, id, email);
//  }

 class Employee {
     constructor(name, id, email, role) { 
        
        this.name = name;
         this.id = id;
         this.email = email;
         this.role = role;
     }

    getName() {
        return this.name;
    }

    getId() {
         return this.name;
     }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

};



//  function getName (name){

//  }

    module.exports = Employee;