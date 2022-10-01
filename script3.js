const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menu = document.getElementsByClassName("menu")[0];
const menu_header_x = document.getElementsByClassName("menu-header-x")[0];

// Images are from unsplash
let pictures = [
'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1548865164-1f50430ddd6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',  
'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
'https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'];

img.src = pictures[0];
let position = 0;

// carousel

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// toggle button

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu_header_x.classList.toggle("active");
});
