let cars = ["VW", "Seat", "Toyota", "Opel", "BMW", "Lada", "Honda", "Audi"];
let newCars = [
  { car: "Toyota", color: "Red" },
  { car: "Seat", color: "Blue" },
  { car: "BMW", color: "Black" },
  { car: "Nissan", color: "Green" },
  { car: "Audi", color: "White" },
  { car: "Honda", color: "Yellow" },
];
let nums = [1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 4, 1, 6, 8, 5, 4, 3, 6];
let newNums = [1, 5, 3, 9, 2, 6, 4, 8, 6, 8, 10, 9, 3, 1];

// Суммировать ВСЕ значения(числа) в массиве.
let sum = nums.reduce((acc, curr) => acc + curr);

// Удалить пустые значения из массива (false, 0, null, NaN, undefined, '')
let arr = [false, "red", "", 0, null, NaN, 2, true, undefined];
let arrFilter = arr.filter(Boolean);

// Конвертировать массив в объект
let = { ...cars };

// Отсортировать повторяющиеся значения
let uniNums = [...new Set(nums)];
let uniNums2 = Array.from(new Set(nums));

// Заменить конкретное значение в массиве
cars.splice(0, 2, "Nissan", "Tesla");

// Перебор массива без map();
let carName = Array.from(newCars, ({ car }) => car);

//Отчистить массив
nums.length = 0;
nums = [];
nums.splice(0, nums.length);

// Найти пересечения двух массивов
let sortNums = [...new Set(nums)].filter((item) => newNums.includes(item));

// Сделать реверс массива
let reverseNums = nums.reverse();

// Последнее вхождение элемента массива
let lastIndex = nums.lastIndexOf(1); //Возвращает последний индекс вхождения элемента или -1 если такого элемента нет

// Создать массив, заполненный камими-то однотипными элементами
let newArr = new Array(10).fill(1);

// Найти случайный элеммент массива
let randomNum = newNums[Math.floor(Math.random() * newNums.length)];
