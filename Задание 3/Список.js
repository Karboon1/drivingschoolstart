var текст = document.getElementById("текст");
var кнопка = document.getElementById("кнопка");
var список = document.getElementById("список");
кнопка.onclick = кнопка_click;

function кнопка_click() {
список.textContent += текст.value + "\n";
текст.value = "";
}
