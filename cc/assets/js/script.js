/**
 * Sub Menu
 */
if (document.querySelector('.sub-menu-course')) {
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
}


/**
 * Año en el que estamos
 */
if (document.querySelector('.year')) {
    document.querySelector('.year').textContent = (new Date()).getFullYear();
}

/**
 * Elección de Curso
 */

function courseElective(num) {
    var courseElective = document.querySelector(`.course-${num}`);
    
    if (courseElective.dataset.course === '1') {
        if (courseElective.classList.contains('d-none')) {
            courseElective.classList.remove('d-none');
            document.querySelector('.empty').classList.add('d-none');
            if (!document.querySelector('.course-2').classList.contains('d-none')) {
                document.querySelector('.course-2').classList.add('d-none');
            }
        }
    } else if (courseElective.dataset.course === '2') {
        courseElective.classList.remove('d-none');
        document.querySelector('.empty').classList.add('d-none');
        if (!document.querySelector('.course-1').classList.contains('d-none')) {
            document.querySelector('.course-1').classList.add('d-none');
        }
    }
}
