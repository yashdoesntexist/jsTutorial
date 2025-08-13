// const student = {
//     fullName: "Je",
//     grade: 99,
//     printGrade: function(){
//         console.log("Your grade is ", this.grade);
//     }
// }

// student.printGrade();

const employee = {
    calcTax(){
        console.log("Tax rate is 3 %");
    }
}

const bruceWayne = {
    salary: "2000000",
};

bruceWayne.__proto__ = employee;

class car{
    constructor(brand, mileage){
        this.brand = brand;
        this.mileage = mileage;
        console.log("Nice", brand, mileage);
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brand = brand;

    // }
}

let toyota = new car("Camry", 30000);
// toyota.setBrand("Camry");
let lexus = new car();

lexus.brand = "c class"; //can set stuff later 
lexus.mileage = 3000000;

console.log(lexus);

class parent{
    constructor(fname){
        this.fname = fname;
        console.log("Parent constructor started");
        this.family = "matters";
        console.log("parent cons exited");
    }
    parentFunction(){
        console.log("this is a parent class function");
    }
}

class child extends parent{
    constructor(fname){ // would be undefined if not fname isnt passed on in super() cause it makes sense
        console.log("Child cons started");
        super(fname); // to invoke parent class c
        // this.branch = branch;
        console.log("child cons exited");
    }

    childFunctions(){
        super.parentFunction();
        console.log("this is a child function");
    }
}

let baby = new child("Something");

// baby.childFunctions();
// baby.parentFunction();


try{
    console.log(variableIdidnotdefine);
}catch(err){
    console.log(err);
}