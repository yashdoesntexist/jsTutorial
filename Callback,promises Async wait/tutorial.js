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

function gettingData(dataInfo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(dataInfo);
            resolve("Success");
            // if(nextData){
            //     nextData();
            // }
        }, 5000);
    });
}

gettingData(1)               //promise chain
    .then((res)=>{
       return gettingData(2);
    })
    .then((res)=>{
        return gettingData(3);
    })
    .then((res)=>{
        return gettingData(4);
    });
// let seeResult = gettingData("Testing promise");


// promise chain

 function asyncFunc() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("sucecess")
        }, 4000);
    });
 }

 function asyncFunc2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("sucecess")
        }, 4000);
    });
 }

console.log("loading")
asyncFunc().then((res)=>{
    console.log(res);
    console.log("data 2 loading");
    asyncFunc2().then((res)=>{
        console.log(res);
    });
 });



//  console.log("loading")
//  let p2 = asyncFunc2();
//  p2.then((res)=>{
//     console.log(res);
//  });

// async-await function 

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("test");
        resolve(200);
        }, 2000);
    });
}

(async function getApiData(){
    await api(); // call back hell or promise chain but better 
    await api();
})();// iife one time call right away execute without calling it makes sense (func)(); is literally function(); called 

async function hello(){
    console.log("hello");
}
