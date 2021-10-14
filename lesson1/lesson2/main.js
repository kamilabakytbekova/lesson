// ! jQuery

// let allElems = $("*");
// let allElem = jQuery("*");
// console.log(allElems);

// tagName
// let h1 = $("h1");
// console.log(h1);
// h1.css("fontSize", "24px");
// h1.css("color","red")

// class
// let month = $(".october");
// console.log(month);

// Native JS
// let liTags = document.querySelectorAll("li");
// liTags.forEach((item) => {
//   item.style.color = " blue";
// });

// JQuery
// let liTags = $("li");
// liTags.css("color", "blue");
// обратиться к 3 li
// let thirdTags = $("li:nth-child(3"); //по порядковому номеру  //? $(li:eq(2)) по index
// thirdTags.css("color", "green");

// let first = $("li:first-child");
// first.css("fontWeight", "700");
// $("li:last-child").css("fontSize", "30px");

// let inputs = $("input");
// let disabledInput = $("input:disabled");
// console.log(disabledInput);

// let value = disabledInput.val();
// disabledInput.val("Не работает");

// let liTags = $("li");
// liTags.addClass("list-item");
// liTags.toggleClass("list-item"); // если есть удаляет если нету добавляет
// liTags.toggleClass("active");
// liTags.removeClass("list-item"); //удаляет класс
// let result = liTags.hasClass("list-item"); //проверяет есть ли такой класс
// console.log(result);

// let divWithoutClass = $("div:not(.block)");
// console.log(divWithoutClass);

// let paragraph = $(".text");
// let text = paragraph.text();
// console.log(text);
// paragraph.html("<strong>JSFS-13</strong>");

// let div = $("#users");
// let users = [
//   {
//     name: "Kamila",
//     age: "23",
//   },
//   {
//     name: "Eldos",
//     age: "21",
//   },
//   {
//     name: "Askat",
//     age: "19",
//   },
// ];

// users.forEach((item) => {
//   div.append(`
//     <p>Имя: ${item.name} Возраст: ${item.age}</p>
//     `);
// });

// let google = $('a[href="google.com"]');
// console.log(google);

// let p = $("p");
// p.text(new Date());

// let google = $("a:first");
// let href = google.attr("href", "amazon.com");
// google.removeAttr("href");
// google.attr("id", "global");
// console.log(href);

//закрашиваем каждый четный элемент

// let liTags = $("li");
// liTags.each((index, element) => {
//   console.log(index, element);
//   if (index % 2 !== 0) {
//     $(element).css("color", "red");
//   }
// });
