const toggleButton = document.getElementsByClassName("toggle-button")[0];

const menu = document.getElementsByClassName("menu")[0];

const menu_header_x = document.getElementsByClassName("menu-header-x")[0];

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu_header_x.classList.toggle("active");
});
