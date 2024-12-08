let result = 0;
console.time('duration');
for(let i = 1; i <= 1000; i++) {
    result += i;
}
console.timeEnd('duration');
console.log('1~1000: %d', result);

let school = {name: 'Hansung', district: 'Seongbuk-gu'};
console.dir(school);

console.log('argv # of parameters:', process.argv.length);
console.dir(process.argv);

process.argv.forEach((item,index) => console.log(index + ' : ', item));

console.dir(process.env);