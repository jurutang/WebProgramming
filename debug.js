let a = 20;
function fn() {
    let b = 30;
    console.log(a+b);
    function fn2() {
        let c = 40;
        console.log(a+b+c);
    }
    fn2();
    function fn3() {
        let d =50;
        console.log(a+b+c+d);
    }
    fn3()
}
fn();