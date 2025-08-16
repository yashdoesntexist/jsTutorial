console.log("test")

setTimeout(() =>{
    console.log("testing");
}, 4000);

console.log("tested")  

// callback in sync 
function sum(a,b) {
    console.log(a+b);
}

function Calc(a, b, sumCallBack){
    sumCallBack(a,b);
}

Calc(2, 4, sum);

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("First Data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
// callback Hell 
getData(12, ()=>{
    getData(22, ()=>{
        getData(3)
    });
});


// Promises

const getPromise = () => {
    return new Promise((resolve, reject)=>{
    console.log("promise");
    // resolve("Success");
    reject("Some problem that will be printed in .catch");
});
}

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fullfilled", res);
});
promise.catch((err)=>{
    console.log("rejected", err);
});

function gettingData(dataInfo, nextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(dataInfo);
            resolve("Success");
            if(nextData){
                nextData();
            }
        }, 5000);
    });
}

let seeResult = gettingData("Testing promise");
