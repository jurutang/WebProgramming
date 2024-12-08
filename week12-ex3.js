// 21세 이상 30세 미만의 점수 평균 구하기
const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age:29, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

const upper21lower30 = students.filter(student => student.age >= 21 && student.age < 30);
const math = upper21lower30.map(student => student.math);
const english = upper21lower30.map(student => student.english);
const avgMath = math.reduce((a,b) => a + b, 0) / math.length;
const avgEnglish = english.reduce((a,b) => a + b, 0) / english.length;

console.log(upper21lower30);
console.log(math);
console.log(english);
console.log(`수학 점수 평균 : ${avgMath}, 영어 점수 평균 : ${avgEnglish}`);