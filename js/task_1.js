// Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;  
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']





// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел,
//   а вторым параметром cb - функцию обратного вызова(callback).Функция mapArray
// создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.
// Оформи создание массива numbers нужной длины используя new Array()
// и необходимый аргумент для задания длины, равной длине array.
// Напиши функцию обратного вызова addIndex, которая принимает два параметра
//   - element и index и возвращает число - сумму element и index(сложение).
// Напиши функцию обратного вызова subIndex, которая принимает два параметра
//   - element и index и возвращает число - разность element и index(вычитание).


// const addIndex = (element, index) =>  element + index ;

// const subIndex = (element, index) =>  element - index;
  
// function mapArray(array, cb) {
//   'use strict';

//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];

// console.log(mapArray(arr, addIndex));
// // [1, 3, 5, 7, 9]

// console.log(mapArray(arr, subIndex));
// // [1, 1, 1, 1, 1]
