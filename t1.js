const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age:29, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

// const res = students.map(a => a.math).filter(a => a >= 80).reduce((a,b)=>(a+b));
// console.log(res);

let len = students.length;
const res2 = students.map(a => a.age).filter(a => a >= 21 && a <= 30).reduce((previous, current, index, array) => previous + (current / array.length), 0);
console.log(res2);