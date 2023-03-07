const accordion_div = document.querySelectorAll(".accordion_div");

let active = null
accordion_div.forEach(container => {
    container.addEventListener("click", function (event) {
        if (event.target.matches(".arrow") || event.target.matches(".question"))
        {
            if (active && active != container) {
                active.classList.remove("show_answer");
            }
            container.classList.toggle("show_answer");
            active = container;
        }
    }); 
});