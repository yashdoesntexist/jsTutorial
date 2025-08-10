// console.log(window);
// window.alert("Hello");

console.dir(window.document);
console.log(document.head);
console.log(document.head.childNodes[1]);



let heading = document.getElementById("heading");
console.log(heading);

let header = document.getElementsByClassName("header");
console.log(header)

let para = document.getElementsByTagName("p");
console.log(para);

let query = document.querySelector("p");
console.log(query);

let allQuery = document.querySelectorAll("p");
console.log(allQuery);

let queryClass = document.querySelector(".header");
console.log(queryClass);

let allQueryClass = document.querySelectorAll(".header");
console.log(allQueryClass);

let queryId = document.querySelector("#acceptButton");
console.log(queryId);

let allQueryId = document.querySelectorAll("#heading");
console.log(allQueryId);

console.log(queryId.tagName)

document.body.childNodes[1].innerText = "This was changed using DOM in JS";

let getDiv = document.querySelector("div");
console.log(getDiv.innerText);
console.log(getDiv.innerHTML);

let deleteHeading = document.getElementById("deleteMe");
deleteHeading.innerText = "This heading is corrected using DOM";

let hiddenText = document.getElementById("hidden");
console.log(hiddenText.textContent)