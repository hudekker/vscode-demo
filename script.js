// define variables (宣告變數)
let containerImg = document.querySelector('#container-img')
let rabbit = document.querySelector('#rabbit')
let threeMen = document.querySelector('#three-men')

// Listen for a click event （事件）
containerImg.addEventListener('click', (event) => {

  // Toggle classes for both html elements
  rabbit.classList.toggle("hide-me");
  threeMen.classList.toggle("hide-me");
})
