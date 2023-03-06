`use strict`

let arrow = document.querySelectorAll(".arrow");
let answer = document.querySelectorAll(".answer");


arrow.forEach(element => {
    element.addEventListener("click", () => {
        element.parentElement.nextElementSibling.classList.toggle("show");
        element.parentElement.nextElementSibling.classList.toggle("hide");

        element.previousElementSibling.classList.toggle("question_bold");
        element.previousElementSibling.classList.toggle("question_light");
    
        element.classList.toggle("arrow_rotate_clockwise");
        element.classList.toggle("arrow_rotate_coutnerclockwise");
    })
});