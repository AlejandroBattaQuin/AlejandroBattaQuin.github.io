/**
 * Sub Menu
 */

function courseMenu() {
    var courseMenu = document.querySelector('.sub-menu-course');

    if (courseMenu.classList.contains('d-none')) {
        courseMenu.classList.remove('d-none');
        courseMenu.classList.add('d-block');
    } else {
        courseMenu.classList.remove('d-block');
        courseMenu.classList.add('d-none');
    }
}

/**
 * Año en el que estamos
 */

document.querySelector('.year').textContent = (new Date()).getFullYear();

