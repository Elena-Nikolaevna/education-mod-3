//
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
let totalFeedback = 0;
//Если нам нужны ключи
/* // 1.Получаем массив ключей
 const keys = Object.keys(feedback); //Получи массив ключей из обьекта feedback
 console.log(keys) // выведено ['good', 'neutral', 'bad']
// 2. Получаем доступ к ключу
for(const key of keys){
    console.log(key);
    console.log(feedback[key]);//Доступ к значениям
    totalFeedback += feedback[key] // получить общую сумму отзывов
};
console.log('totalFeedback: ', totalFeedback); */

// Если нам нужны только операции со значениями

const values = Object.values(feedback);
/* //console.log(values);
for (const value of values) {
    totalFeedback += value;
}
console.log("totalFeedback: ", totalFeedback); */
