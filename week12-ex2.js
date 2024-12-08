// 계발팀의 나이 합계 구하기
const employee = [
    { name: 'ksd', age: 35, department: 'design' },
    { name: 'kjh', age: 21, department: 'development' },
    { name: 'csh', age: 32, department: 'test' },
    { name: 'tom', age: 32, department: 'development' },
    { name: 'july', age: 32, department: 'development' },
    { name: 'mike', age: 32, department: 'test' },
];

const developmentor = employee.filter(employee => employee.department == 'development');
const developmentorAge = developmentor.map(developmentor => developmentor.age);
const sum = developmentorAge.reduce((a,b) => a+b);

const sum2 = employee.filter(employee => employee.department == 'development').map(developmentor => developmentor.age).reduce((a,b) => a+b);

console.log(developmentor);
console.log(developmentorAge);
console.log(sum);
console.log(sum2);