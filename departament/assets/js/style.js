function styleUniversity() {
    var selectUniversity = document.querySelector('select[name="university"]');
    var idUniversity = selectUniversity.value;
    var selectedOption = selectUniversity.querySelector('select[name="university"] option:checked');
    var codga = selectedOption.getAttribute('data-codga');
    var name = selectedOption.innerText;
    // Verifica si hay un elemento seleccionado
    if (idUniversity) {
        styleChange(idUniversity)
        logoChange(codga, name)
    }
}

//Cambiar la hoja de estilos
function styleChange(value) {
    var styleGeneral = document.querySelector('link[data-style="general"]');
    styleGeneral.href = `./assets/css/style-general-${value}.css`;
}

//Funcion para cambiar el logo
function logoChange(codga, name) {
    var logo = document.querySelector('#logo-header');
    logo.src = `./assets/img/logo/${codga}/logo-${codga}.svg`;
    logo.alt = `Logo ${name}`;
    var logo = document.querySelector('#logo-footer');
    logo.src = `./assets/img/logo/${codga}/logo-${codga}-white.svg`;
    logo.alt = `Logo ${name}`;
}