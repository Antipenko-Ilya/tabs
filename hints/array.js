let cars = ["VW", "Seat", "Toyota", "Opel", "BMW", "Lada", "Honda", "Audi"];
let nums = [1, 1, 1, 1, 2, 3, 3, 3, 2, 3, 4, 1, 6, 8, 5, 4, 3, 6];

//Суммировать ВСЕ значения(числа) в массиве.
let sum = nums.reduce((acc, curr) => acc + curr);

//Удалить пустые значения из массива (false, 0, null, NaN, undefined, '')
let arr = [false, "red", "", 0, null, NaN, 2, true, undefined];
let arrFilter = arr.filter(Boolean);

//Конвертировать массив в объект
let = { ...cars };

//Отсортировать повторяющиеся значения
let uniNums = [...new Set(nums)];
let uniNums2 = Array.from(new Set(nums));
