//! jQuery events

$(document).ready(() => {
  console.log("Ready");
});

//! onClick

// let btn = $("button");
// btn.on("click", () => {
//   console.log("Hi");
// });

// ! dblclick

// let btn = $("button");
// function sayHello() {
//   alert("Hello");
// }
// btn.on("dblclick", sayHello);

// !focus
// let input = $("input");
// input.on("focus", () => {
//   console.log("Есть фокус");
// });

// !blur

// input.on("blur", () => {
//   console.log("Убрали фокус");
//   if (!input.val()) {
// alert("Обязательно для заполнения");
//     input.css("border", "2px solid red");
//   } else {
//     input.css("border", "2px solid green");
//   }
// });

// !input
// input.on("input", (e) => {
//   console.log(e.target.value);
// });

// !select
// let input = $("input");
// input.on("select", (e) => {
//   console.log(e);
// });

// let p = $("p");
// ! не рабочий код select работает только с input
// p.on("select", (e) => {
//   console.log(e);
// });

// !Рабочий способ
// let p = $("p");
// let strong = $("strong");
// p.on("mouseup", (e) => {
//   let selectedText = window.getSelection().toString();
//   strong.text("Вы выделили:" + selectedText);
// });

// !hide,show,toggle
// let img = $("img");
// let btnHide = $("#btn-hide");
// let btnShow = $("#btn-show");
// let btnToggle = $("#btn-toggle");

// btnHide.on("click", () => {
//   img.hide(2000);
// });

// btnShow.on("click", () => {
//   img.show(2000);
// });

// btnToggle.on("click", () => {
//   img.toggle(2000);
// });

// ! fadeIn , fadeOut , fadeTo , fadeToggle
// let img = $("img");
// let btnFadeOut = $("#btn-hide");
// let btnFadeIn = $("#btn-show");
// let btnFadeTo = $("#btn-to");
// let btnFadeToggle = $("#btn-toggle");

// btnFadeOut.on("click", () => {
//   img.fadeOut(1000);
// });

// btnFadeIn.on("click", () => {
//   img.fadeIn(1000);
// });

// btnFadeToggle.on("click", () => {
//   img.fadeToggle(1000);
// });

// btnFadeTo.on("click", () => {
//   img.fadeTo(1000, 0.5);
// });

// ! modal
let btnShowModal = $(".show-modal");
let btnCloseModal = $(".my-modal button");
let modal = $(".modal");
let myModal = $(".my-modal");

function showModal() {
  modal.fadeIn(1000).css("display", "flex");
}
function closeModal() {
  modal.fadeOut(1000);
}
btnShowModal.on("click", showModal);
btnCloseModal.on("click", closeModal);

let h3 = $(".my-modal h3");
let p = $(".my-modal p");
modal.on("click", (e) => {
  if (e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
    closeModal();
  }
});

//  !range input
let img = $("img");
let range = $("#range");
range.on("input", (e) => {
  let value = e.target.value;
  img.fadeTo(10, value);
});
