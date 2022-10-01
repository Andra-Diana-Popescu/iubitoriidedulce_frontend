const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const menu = document.getElementsByClassName("menu")[0];
const menu_header_x = document.getElementsByClassName("menu-header-x")[0];

// Images are from unsplash
let pictures = ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRlc3NlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
 'https://images.unsplash.com/photo-1526823127573-0fda76b6c24f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
 'https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGN1cGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'];

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
