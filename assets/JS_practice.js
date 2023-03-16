//1 Вычислить сумму первых n элементов последовательности, параметр n задает пользователь (например n=4 , 1+2+3+4)
const n = +prompt('Enter number');
function Sum(n) {
  let sum = 0;
  if (n <= 0) {
    throw new RangeError("Number must be greater than zero");
  }
  if (typeof n !== "number" || isNaN(n)) {
    throw new TypeError("Enter the number");
  }
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(Sum(n));

//2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные, id.
const student = {
  firstName: 'Igor',
  lastName: 'Igorev',
  isMale: true,
  phone: 0123456789,
  email: 'igorig@mail.com',
  id: 54321,
  dateOfApplication: new Date('2016-09'),

  get course() {
    numberOfYears = (new Date().getFullYear() - student.dateOfApplication.getFullYear());
    if(numberOfYears >= 5) {
      return 'Already graduated';
    } else return numberOfYears;
  }
};

//2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры 
const group = {
  univer: 'ZNTU',
  faculty: 'ETF',
  department: 'electric machine',
};

//2.3 Связать обьект студента с обьектом его группы
const studentInfo = { ...student, ...group};

/*
2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. Функция должна принимать обьект студента
*Добавить геттер для курса студента. Для расчета текущего курса использовать dateOfApplication и методы обьекта Date. Если курс будет больше 5 то вместо результата вернуть ошибку (уже выпустился)
*/

function getStudentInfo() {
  let result = "";
  for (const allStudentInfo in studentInfo) {
    result += `${allStudentInfo}: ${studentInfo[allStudentInfo]} `;
  }
  return result;
}



// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
const arr = [0];
for (let i = 0; i < 23; i++) {
  // let newArr = [];
  arr.push(Math.random() > 0.5 ? Math.floor(Math.random()*100) : Math.floor(-Math.random()*100));
}
arr.push(0);
// 3.2 Вывести элементы с четными индексами
const newArr1 = arr.filter(function (_, i) {
  return i%2 === 0;
    })
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
const newArr2 = arr.filter(function (_, i) {
  return arr[i]%2 === 0;
    })
// 3.4 Вывести индексы элементов, равных нулю (если таковых нет то добавить 1-2 для проверки)
arr.forEach((element,index) => {
  if(element === 0) {
    console.log(index)
  }
});
// 3.5 Подсчитать количество отрицательных чисел в массиве
let num = 0;
arr.forEach((element) => {
  if(element < 0) {
    num++
  }
});
console.log(num);

/*
4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

Добавить классам геттеры и сеттеры для свойств с проверками(правильные типы данных, реалистичные диапазоны и т.д).
*/

class Book {
  #author;
  #title;
  #year;
  #publishingHouse;
  constructor(author, title, year, publishingHouse) {
    this.#author = author;
    this.#title = title;
    this.#year = year;
    this.#publishingHouse = publishingHouse;
  }
  get author() {
    return this.#author;
  }
  set author(authorBook) {
    if(typeof authorBook !== 'string') {
      throw new TypeError('Must be string');
    }
    this.#author = authorBook;
  }
  get title() {
    return this.#title;
  }
  set title(titleBook) {
    if(typeof titleBook !== 'string') {
      throw new TypeError('Must be string');
    }
    this.#title = titleBook;
  }
  get year() {
    return this.#year;
  }
  set year(yearPublished) {
    if(typeof yearPublished !== 'number' || isNaN(yearPublished)) {
      throw new TypeError('Must be number');
    }
    if(typeof yearPublished < 1000) {
      throw new RangeError('Must be greater than 1000'); 
    }
    this.#year = yearPublished;
  }
  get publishingHouse() {
    return this.#publishingHouse;
  }
  set publishingHouse(publisher) {
    if(typeof publisher !== 'string') {
      throw new TypeError('Must be string');
    }
    this.#publishingHouse = publisher;
  }
}
const book1 = new Book('Vasil Red', 'River', 2024, 'indepub')

class Ebook extends Book {
  #format;
  #eNumber;
  constructor(author, title, year, publishingHouse, format, eNumber) {
    super(author, title, year, publishingHouse);
    this.#format = format;
    this.#eNumber = eNumber;
  }
  get format() {
    return this.#format;
  }
  set format(formatEbook) {
    if(typeof formatEbook !== 'string') {
      throw new TypeError('Must be string');
    }
    this.#format = formatEbook;
  }
  get eNumber() {
    return this.#eNumber;
  }
  set eNumber(eNumberEbook) {
    if(typeof eNumberEbook !== 'number' || isNaN(eNumberBook)) {
      throw new TypeError('Must be number');
    }
    if(typeof eNumberEbook < 1) {
      throw new RangeError('Must be greater than zero'); 
    }
    this.#eNumber = eNumberEbook;
  }
}
const eBook1 = new Ebook('Boris Green', 'Desert', 2024, 'indepub', 'pdf', 23);

/*
5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
*/

function fizzBuzz(n) {
  if (n <= 0) throw new RangeError("Number must be greater than zero");
  if (typeof n !== "number" || isNaN(n))
    throw new TypeError("Enter the number");
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')}
    else if (i % 3 === 0) {
      console.log('fizz')}
    else if (i % 5 === 0) {
      console.log('buzz')}
    else console.log(i);
  }
}

/*
6 С сервера передается обьект, имеющий следующую структуру:
С помощью деструктуризации:
- создать переменную users на основании массива в обьекте serverResponse
- создать отдельные переменные для 3 и 4 пользователя
*/

const serverResponse = {
  data: {
      data: [
          {
              id: 0,
              name: 'John',
              lastName: 'Doe'
          },
          {
              id: 1,
              name: 'Jane',
              lastName: 'Doe'
          },
          {
              id: 2,
              name: 'Admin',
              lastName: 'Tiranovich'
          },
          {
              id: 3,
              name: 'User',
              lastName: 'Undefinovich'
          },
      ]
  }
}

const{
  data: {data: users, data: [, , user3, user4]}
} = serverResponse;

/*
Необязательные бонусные условия:

Добавить обьекту студента свойство dateOfApplication - дату его поступления в университет. Использовать обьект Date для решения задачи



*/
