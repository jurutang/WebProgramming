// 수학 80점 이상 학생들의 점수 합 구하기
const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age: 19, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

const upper80mathStudents = students.filter(student => student.math > 80);
const upper80math = upper80mathStudents.map(student => student.math);
const sum = upper80math.reduce((a,b) => a+b);

const sum2 = students.filter(student => student.math > 80).map(student => student.math).reduce((a,b) => a+b);

console.log(upper80mathStudents);
console.log(upper80math);
console.log(sum);
console.log(sum2);