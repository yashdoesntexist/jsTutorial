const URL = "https://meowfacts.herokuapp.com/";

let btn = document.querySelector("#factGet");



const getFacts = async() =>{
    console.log("getting data");
    let response = await fetch(URL);
    console.log(response);
    let data = (await response.json()).data[0];
    console.log(data);
    document.querySelector(".randomFact").innerText = data;
} 

//  same function with promise chain

// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data.data[0]);
//         document.querySelector(".randomFact").innerText = data.data[0];
//     });
// }

btn.addEventListener("click", getFacts);