// 1. Cho layout ở phía dưới
// Khi click vào nút “Hide text”, dòng chữ bên trên sẽ được ẩn đi
// Khi click vào nút “Show text”, dòng chữ bên trên sẽ được hiện ra
// const btn1 = document.getElementsByClassName("btn1");
// console.log(btn1);
// const btn2 = document.getElementsByClassName("btn2");
// const p = document.getElementsByTagName("p");
// console.log(p);

// btn1[0].addEventListener("click", function () {
//   p[0].style.display = "none";
// });
// btn2[0].addEventListener("click", function () {
//   p[0].style.display = "block";
// });
// ========================2==========================
// 2. Cho layout ở phía dướis
// const btn = document.getElementsByClassName("btn");
// const box = document.getElementsByClassName("box");

// btn[0].addEventListener("click", function () {
//   console.log(btn);
//   box[0].style.display = "block";
//   box[0].style.position = "absolute";
//   box[0].style.margin = "200px 200px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
// });
// let i = document.getElementsByTagName("i");
// console.log(i);
// i[0].addEventListener("click", function () {
//   box[0].style.display = "none";
//   document.body.style.backgroundColor = "white";
// });

// =============================================

// ========================3==========================

// const sqr = document.getElementsByClassName("sqr");
// for (let s of sqr) {
//   s.addEventListener("mouseover", function (e) {
//     let color = window.getComputedStyle(e.target).backgroundColor;
//     document.body.style.backgroundColor = color;
//   });
// }
// console.log(sqr[0].style);
// console.log(sqr[0].style.backgroundColor);
// let color = window.getComputedStyle(sqr[0]).backgroundColor;
// function hover(sqr) {
//   document.body.style.backgroundColor = color;
// }
// sqr1.style.backgroundColor;

// console.dir(sqr[1]);

// const color1 = sqr.style.backgroundColor;
// console.log(sqr1);
// console.log(color1);

// function changeBgrColor(color) {
//   document.body.style.backgroundColor = "color";
// }

// btn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

// console.log(window.getComputedStyle(sqr[0]).backgroundColor);
// ======================4======================

// <!-- 4. Cho layout ở phía dưới
// Khi hơ chuột đi qua dòng text “Hover over me”, một Tooltip sẽ được hiện ra
// Khi hơ chuột ra ngoài dòng text “Hover over me”, Tooltip sẽ biến mất -->
// let hoverText = document.getElementsByClassName("hover-text");
// let tooltipText = document.getElementsByClassName("tooltip-text");
// hoverText[0].addEventListener("mouseover", function () {
//   tooltipText[0].style.display = "block";
//   hoverText[0].style.textDecoration = "underline dashed";
// });
// hoverText[0].addEventListener("mouseout", function () {
//   tooltipText[0].style.display = "none";
//   hoverText[0].style.textDecoration = "none";
// });

// ======================5======================
// <!-- 5. Cho layout ở phía dưới Khi click vào button “Toggle dark mode”, toàn bộ
//     giao diện sẽ được đổi sang chế độ tối (background, text) Khi click vào
//     button “Toggle dark mode”, một lần nữa, giao diện tối sẽ bị tắt đi và quay
//     trở lại bình thường -->
const toggle = document.getElementsByClassName("task-5");
const btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click", function (e) {
  //   e.target.textContent = "Toggle Light Mode";
  //   document.body.style.backgroundColor = "black";
  //   document.body.style.color = "white";
  // });

  toggle[0].classList.toggle("demo-toggle");
});
