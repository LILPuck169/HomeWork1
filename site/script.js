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
