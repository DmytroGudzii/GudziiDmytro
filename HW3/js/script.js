//              1 - Создать переменную каждого типа данных.           //

// var number = 1 + 5;
// console.log(number)

// var string = 'Добрый вечер';
// console.log(string);
// console.log(string [4]);

// let boolean = true;
// let neboolean = false;

// let ex = null;

// let ex = 33;
// ex = undefined;
// alert(ex);

// typeof Symbol("ex");

// const bigInt = 8765434567876543456787654345678765445678n;

// var object = {
//     name: 'Leo',
//     age: 25
// };



//         2 - Создать переменную var, let, const. Перезаписать их значения(не для const)      //

// var x = 5;
// x = 10;

// let y = 5;
// y = 10;

// const p = 5;



//         3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).              //

// let number = 17;
//
// let number = 17;
// console.log(17+'dfs');
//
// number = number.toString()
// console.log(number);

//let sting = 'podoshva';
//
// let string = +prompt(555);

//const bigInt = 9007199254740991n;
//
//const bigInt = BigInt(9007199254740991);
//
//const bigInt = BigInt("9007199254740991");
//
//const bigInt = BigInt("0x1fffffffffffff");

// var bool = NaN;
// !!bool; //false
// Boolean(bool); //false
//
// var bool = 'false';
// !!bool; //true
// Boolean(bool); //true
//
// let apple = true;
// let kartoxa = false;

// let apple;
// console.log(apple);
//
// apple = null;
// console.log(apple);
// apple = undefined;

// apple = null;

//let id = Symbol("id");

//let id = 5 + ("55")
//console.log(id);

// const king = {name: 'Solomon', age: 30};
// console.log(king);
//
// var name = new Object(null);




//        4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.      //

// var number = (5 + 5);
// console.log(number);

// var number = (5 + 'лет');
// console.log(number);

// var number = (5 + true);
// console.log(number);

// var number = (5 + null);
// console.log(number);

// var number = (5 + undefined);
// console.log(number);

// var number = (5 + 1234445555666789999990n);
// console.log(number);

// var number = 5 + {'un': 3}
// console.log(number);

// var number = 5 + ("ex");
// console.log(number);

//////////////////////////////////////////

// var string = ('nik' + 'kim');
// console.log(string);

// var string = (5 + 'лет');
// console.log(string);

// var string = ('nik' + true);
// console.log(string);

// var string = ('nik' + null);
// console.log(string);

// var string = ('nik' + undefined);
// console.log(string);

// var string = ('nik + 1234445555666789999990n);
// console.log(string);

// var string = 'mik' + {'un': 3}
// console.log(string);

// var string = 'nik' + ("ex");
// console.log(string);


//           5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.      //


// var number = (5 - 5);
// console.log(number);

// var number = (5 - 'лет');
// console.log(number);

// var number = (5 - true);
// console.log(number);

// var number = (5 - null);
// console.log(number);

// var number = (5 - undefined);
// console.log(number);

// var number = (5 - 1234445555666789999990n);
// console.log(number);

// var number = 5 - {'un': 3}
// console.log(number);

// var number = 5 - ("ex");
// console.log(number);

//////////////////////////////////////////

// var string = ('nik' - 'kim');
// console.log(string);

// var string = (5 - 'лет');
// console.log(string);

// var string = ('nik' - true);
// console.log(string);

// var string = ('nik' - null);
// console.log(string);

// var string = ('nik' - undefined);
// console.log(string);

// var string = ('nik - 1234445555666789999990n);
// console.log(string);

// var string = 'mik' - {'un': 3}
// console.log(string);

// var string = 'nik' - ("ex");
// console.log(string);


//      6 - Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».


// let usName = prompt("Введите логин", '');
// if (usName === 'kykold') {
//     let pass = prompt('введите пароль', '');
//     if (pass === '1234asdQQ') {
//         alert( 'Добро пожаловать' );
//     } else if (pass === '' || pass === null) {
//         alert( 'ошибка ввода' );
//     } else {
//         alert( 'ошибка ввода' );
//     }
// } else if (userName === '' || userName === null) {
//     alert( 'ошибка ввода' );
// } else {
//     alert( "ошибка ввода" );
// }


//   7 - Задача (Условный оператор)
//  Пользователь вводит год рождения. Программа показывает количество
//  лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
//  если нет – «вход воспрещен».

// let age = +prompt('подтвердите свой возраст');
// // if (age >= 16) {
// //     alert ('добро пожаловать');
// // } else if (age <= 15)
// //     alert ('вход воспрещен');

//                 8 - Задача (Условный оператор)
//            Создайте программу, которая выводит надбавку за стаж.
//        Пользователь вводит стаж работы, а программа пишет ему надбавку.

// let bonus = +prompt('введите стаж работы');
// if (bonus >= 5 && bonus <=9) {
//     alert ('+ 4000 $')
// } else if (bonus >= 10 && bonus <=15) {
//     alert ('+ 6000 $')
// } else if (bonus >= 15 && bonus <=20) {
//     alert ('+ 10000 $')
// } else if (bonus <=4) {
//     alert ('тебе и так нормально платят')
// } else if (bonus >=21) {
//     alert ('тебе пора на пенсию')
// }

//                       9 - Задача (Условный оператор и свитч кейс)
//    Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//    9.1 Решить на иф елсах
//    9.2 Решить на свитч кейсе
//    9.3 Решить на тернарном операторе

// let day = +prompt('введите число от 1 до 7');
// // if (day === 1) {
// //     alert ('monday')
// // } else if (day === 2) {
// //     alert('Tuesday')
// // } else if (day === 3) {
// //     alert ('Wednesday')
// // } else if (day === 4) {
// //     alert ('Thursday')
// // } else if (day === 5) {
// //     alert ('Friday')
// // } else if (day === 6) {
// //     alert ('Saturday')
// // } else if (day === 7) {
// //     alert ('Sunday')
// // } if (day >= 8) {
// //     alert ('читайте условие ввода')
// // }

// let day = +prompt('введите число от 1 до 7');
// switch (day) {
//     case 1:
//         alert('monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
//     default:
//         alert('читайте условие ввода');
// }

// let day = +prompt('введите число от 1 до 7');
// day === (1) ?
//     alert('monday'):
// day === (2) ?
//     alert('Tuesday') :
// day === (3) ?
//     alert('Wednesday'):
// day === (4) ?
//     alert('Thursday') :
// day === (5) ?
//     alert('Friday'):
// day === (6) ?
//     alert('Saturday') :
// day === (7) ?
//     alert('Sunday') :
//     alert('читайте условие ввода')


//         10 - Задача (Условный оператор)
//     Используя конструкцию if..else, напишите код,
//     который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.


// let number = +prompt('введите число');
// if (number >=1) {
//     alert(1);
// } else if (number <= -1) {
//     alert(-1);
// } else alert(0);


//                    11 - Задача (Тернарный оператор)
//              Перепишите if..else с использованием нескольких операторов '?'.

//               let message;
//
//         if (login == 'Сотрудник') {
//                message = 'Привет';
//         } else if (login == 'Директор') {
//                message = 'Здравствуйте';
//         } else if (login == '') {
//                message = 'Нет логина';
//         } else {
//                message = '';
//         }

// let login = prompt('введите логин');
// login === ('сотрудник') ?
//     alert('привет'):
//     login === ('директор') ?
//         alert('Здравствуйте'):
//         login === '' ?
//             alert('нет логина'):
//             alert('');

//               12 - Задача (Условный оператор)
//       В первом подъезде квартиры с 1 по 20.
//       Во втором с 21 по 48.
//       В третьем с 49 по 90.
//       Пользователь вводит номер квартиры.
//       Программа должна указать в каком подъезде находится данная квартира.

// let padik = +prompt('введите номер квартиры');
// if (padik >=1 && padik <=20) {
//     alert(1);
// } else if (padik >=21 && padik <= 48) {
//     alert(2);
// } else if (padik >= 49 && padik <=90) {
//     alert(3)
// } else alert('нет такой квартиры');

//          13 - Задача (Условный оператор)
//          Напишите if..else, соответствующий следующему switch:
//
//    switch (browser) {
//      case 'Edge':
//        alert( "You've got the Edge!" );
//        break;
//
//      case 'Chrome':
//      case 'Firefox':
//      case 'Safari':
//      case 'Opera':
//        alert( 'Okay we support these browsers too' );
//        break;
//
//      default:
//        alert( 'We hope that this page looks ok!' );
//     }

// let browser  = prompt('check');
// if (browser === 'Edge' ) {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser ==='Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }


//          14 - Задача (свитч кейс)
//          Переписать условия "if" на "switch"
//          важность: 4
//          Перепишите код с использованием одной конструкции switch:
//
//        const number = +prompt('Введите число между 0 и 3', '');
//
//        if (number === 0) {
//            alert('Вы ввели число 0');
//        }
//
//        if (number === 1) {
//            alert('Вы ввели число 1');
//        }
//
//        if (number === 2 || number === 3) {
//         alert('Вы ввели число 2, а может и 3');
//       }

// const number = +prompt('Введите число между 0 и 3', '')
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break;
//     default:
//         alert('читайте условия ввода');
// }