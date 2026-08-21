/*function sum(x, y) {
    return x+y;
}
function sumWithMsg(clbk,msg){
    const result=clbk(20,30);
    const fresult="HI " + msg + " Your score is:" + result;
    console.log(fresult);
}
sumWithMsg(sum,"MR.X");*/
const username="kartik";
const password="123456";
function verify(a,b){
    if(a==username && b==password){
        return "verified";
    }
    else{
        return "not verified";
    }
}
function verifyWithMsg(clbk,msg){
    const result=clbk("kartik","123456");
    const fresult="HI " + msg + " " + result;
    console.log(fresult);
}
verifyWithMsg(verify,"MR.X");