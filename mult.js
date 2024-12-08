let result;
let exp1;
let exp2;

onmessage = function(e){
    exp1 = parseInt(e.data.exp1);
    exp2 = parseInt(e.data.exp2);
    result = exp1 * exp2;
    this.postMessage(result);
}
console.log('15');