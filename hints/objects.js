// Создание объекта
const user = {
  id: 1,
  name: "Lololoshka",
};
const person = Object.assign({
  id: 13,
  firstName: "Misha",
  lastName: "Vackow",
  old: 21,
});
const newPerson = Object.assign(person, {
  email: "lololoshka@mail.ru",
}); // Этим образом можно заменить значения объекта
const newUser = {
  ...person,
  address: "Russian Federation",
};

// Получить все КЛЮЧИ объекта
console.log(Object.keys(user));

// Получить все Значения объекта
console.log(Object.values(person));

// Создать из объекта двумерный массив
console.log(Object.entries(newUser));

// "Заморозить"(запретить редактирование) объекта
console.log(Object.freeze(newUser));

// Запретить добавление новых свойств объекта
console.log(Object.seal(newUser));
