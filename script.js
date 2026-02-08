const messege1 = prompt("напишіть перше повідомлення!");
const messege2 = prompt("напишіть друге повідомлення!");
if (messege1 !== "" && messege2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const number1 = Number(prompt("Напишіть перше число!"));
const number2 = Number(prompt("Напишіть друге число!"));

if (number1 + number2 >= 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

const js = prompt("напишіть речення!")
if (js.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
}

const numbers = prompt("Введіть число");

if (numbers > 10 && numbers < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

const username = prompt("Напишіть ім'я");
const email = prompt("Напишіть email");
const password = prompt("Напишіть пароль");

if (
  username &&
  username.length >= 3 &&
  email.includes("@") &&
  email.includes(".") &&
  password.length >= 6
) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}