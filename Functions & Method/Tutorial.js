function myFunction(){
    console.log("What is my purpose?");
    console.log("To Print the word: butter");
}

myFunction();

function addNumber(num1, num2){
    sum = num1+ num2;
    console.log("Thinking..");
    return sum;
}

console.log(addNumber(1,8));

let arrowFunction = (a, b) =>{console.log(a+b);}
let emptyArrowFunc = () => {console.log("Hello");}

arrowFunction(5,5);
emptyArrowFunc();

function vowelFinder(Userstr){
    str = Userstr.toLowerCase();
    count = 0;
    for(let char in str){
        if(str[char] === "a" || str[char] === "e" || str[char] === "i" || str[char] === "o" || str[char] === "u"){
            count++;
        }
    }
    console.log("Number of vowels found are ", count);
}

vowelFinder("AESDFAcOi");

let arr = [1,2,3,4,5];

arr.forEach((val)=>{console.log(val*val);});

let cubedArr = arr.map((val)=>{return val**3;});
console.log(cubedArr);

let isEven = arr.filter((val)=>{return val % 2 ==0});
console.log(isEven);

let output = arr.reduce((res, curr)=>{return res+curr;})
console.log(output);