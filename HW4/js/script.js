// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const array1 = ['a', 'b', 'c'];
// const array2 = [ 1 , 2 , 3 ];
// const array3 = array1.concat(array2);
// console.log(array3);

// 2) Дан массив ['a', 'b', 'c'].
//    Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)

// let array = ['a', 'b', 'c'];
// array.push(1, 2, 3);
// console.log(array);

// var array = ['a', 'b', 'c'];
// array.splice(3, 0, 1, 2, 3);
// console.log(array);

// 3) Дан массив [1, 2, 3, 4, 5].
//    С помощью метода splice преобразуйте массив в [1, 4, 5].

// var array = [1, 2, 3, 4, 5];
// array.splice(1,2);
// console.log(array);

// 4) Дан массив [1, 2, 3, 4, 5].
//    С помощью метода splice сделайте из него массив
//    [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(3,0, 'a', 'b', 'c');
// console.log(array);

// 5) Дан массив const arr = [1, 2, 3, 4, 5].
//    Создать новый пустой массив arr1.
//    Обойти массив arr через цикл for, каждый элемент массива arr
//    умножить на 10 и результат положить в массив arr1.

// const arr = [1, 2, 3, 4, 5];
// let arr1 = [];
// for(let i=0; i<arr.length; i++) {
//     arr1.push(arr[i]* 10);
// }
// console.log(arr1);

// 6) Вывести числа от 4 до 400 на экран.

// for (let i = 4; i <= 400; i++) {
//     console.log(i);
// }

// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// for (var i = 4; i <= 13; i += 3) {
//     console.log(i);
// }

//  8) Вывести числа 654 653 652 до нуля.

// for (var i = 654; i >= 0; i -= 1) {
//     console.log(i);
// }

//  9) Вывести все годы с 1983 до 2017.

// for (var i = 1983; i <= 2017; i++) {
//     console.log(i);
// }

//  10) Вывести числа -4 -2 0 2 4 6 ...100.

// for (var i = -4; i <= 100; i+=2) {
//     console.log(i);
// }

//   11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// 12) Заполните массив следующим образом:
//     в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее.
//     Длину массива вводить через prompt.

// let num = +prompt('введите число');
// let arr = [];
// let str = '';
// for (let i = 0; i < num; i++) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);

// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//  во второй '22', в третий '333' и так далее.
//  Длину массива вводить через prompt.

// let num = +prompt('введите число');
// let arr = [];
// let str = '';
// for (let i=1; i<num + 1; i++) {
//     str = '';
//     for (let f=1; f<=i; f++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);


// 14*) нарисовать матрицу x должны быть по краям, 0 в центре.
// ( длина и высота матрицы не меньше 10 )
//
//   ['x', 'x', 'x', 'x', 'x' 'x', 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//   ['x', 'x', 'x', 'x', 'x', 'x','x']

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let arr1 = [];
//     for (let j = 0; j < 10; j++) {
//
//         if (i === 0 || i === 9) {
//             arr1.push('x');
//         } else if (j === 0 || j === 9) {
//             arr1.push('x');
//         } else {
//             arr1.push( '0' );
//         }
//     }
//     arr.push(arr1);
// }
// console.log(arr);

// 15*) нарисовать матрицу (таблица умножения)
//   0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//   2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
//   3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
//   4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
//   5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
//   6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
//   7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
//   8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
//   9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// let arr = [];
// for (i=1; i<=10; i++) {
//     let arr1 = []
//
//     for (j=1; j<=10; j++){
//         if (j>0 && i>0) {
//             arr1.push(j*i)
//         } else if (i>=0 && j>0) {
//         }
//     }
//     arr.push(arr1);
// }
// console.log(arr);

// 16*)	Написать программу которая будет склонять слово
// 	    “товар” в зависимости от количества товаров в корзине.
//     	Например 1 - товар, 4 - товара, 6 - товаров.


// let tovar = +prompt('сколько товаров в корзине?');
// if (tovar === 1  || (tovar -1) %100 ===0 || (tovar -9) %10 ===0) {
//     alert(`в корзине ${tovar} товар`)
// } else if (tovar <= 4 || tovar >=21 && (tovar-1)%10===0 || tovar >21 && (tovar-2)%10===0 ||
//     tovar >21 && (tovar-3)%100===0 || tovar >21 && (tovar-4)%10===0 ) {
//     alert(`вы приобрели ${tovar} товара`)
// } else if (tovar >= 5  || tovar <=20 && (tovar-1) % 10 === 0) {
//     alert(`вы приобрели ${tovar} товаров`)
// }

// let tovar = +prompt('сколько товаров в корзине');
// if (tovar === 1 || (tovar -1) %10 === 0) {
//     alert(`в корзине ${tovar} товар`)
// } else if (tovar >=2 || tovar >=4 && (tovar-3)%10=== 0) {
//     alert(`вы приобрели ${tovar} товара`)
// } else if (tovar >=5 || tovar<=10 && (tovar -1)%100) {
//     alert(`вы приобрели ${tovar} товаров`)
// }

const tovar = +prompt('сколько товаров в корзине?');
const tov1 = tovar % 100;
const tov2 = tov1 % 10;
if (tov1 > 10 && tov2 < 20) {
    alert(`в корзине ${tovar} товаров`)

} else if (tov2 >=2 && tov2 < 5) {
    alert(`в корзине ${tovar} товара`)

} else if (tov2 === 1) {
    alert(`в корзине ${tovar} товар`)

} else {
    alert(`в корзине ${tovar} товаров`)
}


