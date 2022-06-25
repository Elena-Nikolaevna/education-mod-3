
//======================= РАСПЫЛЕНИЕ массивов

/* const numbers = [
    1000,
    ...[1, 2, 3],
    5000,
    ...[4, 5, 6],
    7000,
    ...[7, 8, 9],
    9000,
];
//console.log(numbers);

const temps = [18, 14, 12, 21, 17, 29, 24];
const temp = Math.min(14, ...temps, 22) // мщжно создать новую переменную, в которую распылить массив
//console.log(temp)

//console.log(Math.min(...temps)) // с помощью распыления можно перебрать массив

//console.log(Math.max(1, 4, 17, 5, 6)) // Выводит саое большое значение
//console.log(Math.min(1, 4, 17, 5, 6)) // Выводит самое маленькое значение\

/// если распыляем сложный тип, то распыляется ссылка, обьекты не равны, а значения равны

const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log('a:', a);
console.log('b:', b);

console.log(a === b); // false потому что массивы не равны
console.log(a[0] === b[0]);// true потому что обьекты равны

b[0].x = 1000;// если изменяется значение в одном масиве, изменяется и во втором

console.log('a:', a);
console.log('b:', b); */


// Распыление по переменных

/* const lastWeekTemps = [1, 2, 3];
const currentTemps = [3, 4, 5];
const nextWeekTemps = [6, 7, 8];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps) */

//===================    Распыление обьектов
const a = {x: 1, y: 2};
const b = {x: 0, y: 3};

//const c = Object.assign({}, a, b); // распыли в пустой массив значения a и b

//Или 
const c = {
    ...a,
    ...b
};




console.log(c); // {x: 0, y: 3} потому что все что правее в распылении важнее и перезаписывается

