// to open and close hammy button
const menuBtn = document.querySelector('.menu-btn');
let openMenu = false;
menuBtn.addEventListener('click', function() {
    if(!openMenu) {
        menuBtn.classList.add('open');
        openMenu = true;
    } 
    else {
        menuBtn.classList.remove('open');
        openMenu = false;
    }
});

function toggleClass() {
    let menu = document.querySelector(".mainMenu");
    menu.classList.toggle("toggleCls");
}