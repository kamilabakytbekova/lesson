// document.addEventListener("DomContentLoaded", () => {
//   console.log("Dom content downloaded");
// });

// let btn = document.querySelector("button");
// btn.onClick = () => {
//   alert("clicked");
// };

// btn.addEventListener("click", (event) => {
//   alert("clicked");
//   console.log(event);
// });

// online,offline
// window.addEventListener("offline", () => {
//   console.log("Пропал интернет");
// });
// window.addEventListener("oтдшту", () => {
//   console.log("Появился интернет");
// });

// mousemove - Любое движение мышью
// mousedown - при  нажатии на мышь
// mouseup - при опускании мыши
// document.addEventListener("mousemove", (e) => {
//   console.log(e);
// });

// document.addEventListener("mousedown", (e) => {
//   console.log(e);
// });

// document.addEventListener("mouseup", (e) => {
//   console.log(e);
// });

// input- на каждое изменение инпута
// paste- когда вставляем
// copy- когда копируем

// let input = document.querySelector("input");
// let h3 = document.querySelector("h3");

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   h3.innerText = e.target.value;
// });

// input.addEventListener("paste", (e) => {
//   alert("Скопировано");
// });

// input.addEventListener("copy", (e) => {
//   alert("Нельзя копировать");
// });

// resize -при изменении размера экрана
// window.addEventListener("resize", (e) => {
//   console.log(e);
// });

// submit- у тега форм при нажатии на кнопку
// let input = document.querySelector("input");
// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let text = input.value;
//   let li = document.createElement("li");
//   li.innerText = text;
//   ul.append(li);
// });

// keypress- любое нажатие клавиш
// keydown- при нажатии на клавиши
// keyup- при опускании мыши

// document.addEventListener("keypress", (e) => {
//   console.log(e);
// });

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e);
// });

// let span = document.querySelector(".first-span");
// let btnChangeColor = document.querySelector(".change-color");
// let btnChangeSize = document.querySelector(".change-size");

// btnChangeColor.addEventListener("click", () => {
//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);
//   span.style.color = `rgb(${red},${green},${blue})`;
// });

// btnChangeSize.addEventListener("click", () => {
//   span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// });

// let btn = document.querySelector(".button");

// let body = document.querySelector("body");
// btn.addEventListener("click", () => {
//   body.style.backgroundColor = "pink";
// });
