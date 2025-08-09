let str = "A";

let str2 = 'n';

console.log(str.length);

let sentence = "Two\tWords"

console.log(sentence)

let obj ={
    item : "pen",
    price : 10, 

};

let pecial = ` The cost of ${obj.item} is ${obj.price}`;

console.log(pecial);
console.log(pecial.slice(0,3));
console.log(sentence.concat(pecial));
let newSentence = sentence+pecial; // alternate way to concat
console.log(newSentence);

console.log(sentence.replace("Two", "Three")); // replaceAll to replace repeating word 


console.log(sentence.charAt(1));