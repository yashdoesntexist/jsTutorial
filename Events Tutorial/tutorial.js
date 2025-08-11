let accessBtn = document.getElementById("btn");
accessBtn.onclick = () =>{
    console.log("you clicked this btn");
}

let divBox = document.querySelector("div");

divBox.onmouseover = () =>{
    console.log("you are in the box ee ooo");
}

let newBtn = document.querySelector("#newBtn");

// newBtn.onclick = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target)
// }

newBtn.addEventListener("click", () => {
    console.log("click caught using addEventListner");
});

const deleteBtn = (e) => {
    console.log("Same btn new function (nit allowed in onlcick funtion)click caught using addEventListner");
    console.log(e);
}
newBtn.addEventListener("click", deleteBtn);

newBtn.removeEventListener("click", deleteBtn);

let currMode = "light";
let bgHtml = document.querySelector("html");
let modeChange = document.getElementById("modeDark");
console.log(bgHtml);
const bgColorChange = () => {
    bgHtml.style.backgroundColor = "black";
    modeChange.innerText = "Light mode";
}

const bgColorChangeL = () => {
    bgHtml.style.backgroundColor = "white";
    modeChange.innerText = "Dark mode";
}



modeChange.addEventListener("click", () => {
    if (currMode == "light"){
        currMode = "dark";
        bgColorChange();
    }
    else {
        currMode = "light";
        bgColorChangeL();
    }
});