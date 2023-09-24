function date() {
  let number = Number(prompt("Введите номер месяца!"));
  if ((number >= 1 && number <= 2) || number === 12) {
    return alert(`Зима`);
  } else if (number >= 3 && number <= 5) {
    return alert(`Весна`);
  } else if (number >= 6 && number <= 8) {
    return alert(`Лето`);
  } else if (number >= 9 && number <= 11) {
    return alert(`Осень`);
  } else {
    return alert(`Такого месяца нет!`);
  }
}

function playGame() {
  let words = ["яблоко", "груша", "дыня", "виноград", "персик", "мандарин"];
  words.sort(() => Math.random() - 0.5);
  alert(words.join(", "));
  let firstWord = prompt("Чему равнялся первый элемент массива?");
  let lastWord = prompt("Чему равнялся последний элемент массива?");
  if (
    firstWord.toLowerCase() === words[0] &&
    lastWord.toLowerCase() === words[words.length - 1]
  ) {
    alert("Поздравляем! Вы угадали оба слова!");
  } else if (
    firstWord.toLowerCase() === words[0] ||
    lastWord.toLowerCase() === words[words.length - 1]
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно!");
  }
}
