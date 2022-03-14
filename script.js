const open = document.querySelector("#desktop");
const close = document.querySelector("#mobile");
const popup = document.querySelector(".share--popup");
const path = document.querySelector("#path");

open.addEventListener("click", () => {

    popup.classList.toggle('hide');
    path.classList.toggle('path_fill--light');
    open.classList.toggle('icon_bg--dark');
})

close.addEventListener("click", () => {
    
    popup.classList.toggle('hide');
    path.classList.toggle('path_fill--dark');
    open.classList.toggle('icon_bg--dark');
})