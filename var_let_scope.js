var v0 = 'v0';
let l0 = 'l0';
console.log(v0, l0); // v0 l0
function fn1() {
    v0 = 'fn1-v0';
    l0 = 'fn1-l0';
    console.log(v0,l0); // fn1-v0 fn1-l0
}
fn1();
function fn2(){
    var v0 = 'fn2-v0';
    let l0 = 'fn2-l0';
    console.log(v0,l0); // fn2-v0 fn2-l0
}
fn2();
console.log(v0, l0); // fn1-v0 fn1-l0
{
    var v0 = 'block-v0';
    let l0 = 'block-l0';
    console.log(v0,l0); // block-v0 block-l0
}
console.log(v0,l0); // block-v0 fn1-l0

var vi = 'l';
for(var vi=0; vi<1; vi++) {
    console.log(vi);
}
console.log(vi);

let li = 'j';
for(let li = 0; li < 1; li++) {
    console.log(li);
}
console.log(li);