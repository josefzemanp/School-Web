function toggleMenu() {
    var nav = document.querySelector('.header_nav');
    nav.classList.toggle('open');
}

function toggleDropdown() {
    var dropdown = document.querySelector('.header_nav_dropdown');
    dropdown.classList.toggle('active');
}

function toggleClassDropdown() {
    var dropdown = document.querySelector('.header_nav_dropdown_classes');
    dropdown.classList.toggle('active');
}