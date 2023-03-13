let main_card = document.querySelector(".main");
let share = document.querySelector(".share");
let triangle_down = document.querySelector(".triangle-down");
let submit = document.getElementById("submit-button")

submit.addEventListener("click", () =>{
    share.style.display = "flex";
    triangle_down.style.display = "flex";
} )