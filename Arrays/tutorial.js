let superHeroes = ["Ironman", "Superman", "Batman(Me)", "Spiderman"];
let grades = [99, 97, 82, 42, 49];
let Prices = [300, 540, 200, 120, 50];
grades[2] = 33;

console.log(grades);
console.log(grades[2]);
console.log(grades.length);
console.log(typeof superHeroes); // array is an object

//for loop
for(let i = 0; i<superHeroes.length; i++){
    console.log(superHeroes[i]);
};

// for-of loop
for(let item of superHeroes){
    console.log(item.toUpperCase());
};

// Find average of the class using grade array
let sum = 0;
for(let item of grades){
    sum += item;
};
let averageGrade = sum / grades.length;
console.log(averageGrade)

// Apply 10 percent off on items array and replace all values with the discount applied
let i = 0;
for(let price in Prices){
    let offer = Prices[i] / 10;
    Prices[i] = Prices[i] - offer;
    i++;
};
console.log(Prices);

superHeroes.push("Antman", "Omniman");
let notSuperHero = superHeroes.pop();

superHeroes.unshift("Hulk", "Omniman");
let defNotSuperHero = superHeroes.shift();

console.log(superHeroes.toString());
console.log(notSuperHero);
console.log(defNotSuperHero);
console.log(superHeroes.splice(2,1,"Flash"))
console.log(superHeroes);