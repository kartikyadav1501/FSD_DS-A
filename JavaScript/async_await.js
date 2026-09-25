function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("f1");
            resolve();
        }, 4000);
    });
}
function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("f2");
            resolve();
        }, 2000);
    });
}
f1().then(f2).catch((err) => {
    console.error(err);
});

async function test(){
    try{
    await f1();
    await f2();
    }
    catch(err){
        console.log("ERROR",err);
    }
}
test();