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

