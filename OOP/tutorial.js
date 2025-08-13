const student = {
    fullName: "Je",
    grade: 99,
    printGrade: function(){
        console.log("Your grade is ", this.grade);
    }
}

student.printGrade();