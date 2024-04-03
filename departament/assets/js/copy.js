/**
 * La @function codificar() sustituira los elementos de apertura y de cierre de las etiquetas html.
 * El @param codigo será el texto que queremos codificar. 
 */

function codificar(codigo) {
    codigo = codigo.replace(/</g, '&lt;');
    codigo = codigo.replace(/>/g, '&gt;');
    return codigo;
}

/**
 * La 
 */
function precode() {
    var shortcodes = document.querySelector('select[name=shortcodes').value;
    var section = shortcodes.trim();

    var textoOriginal = document.querySelector(`#${section}`).innerHTML;
    var textoEscapado = codificar(textoOriginal);
    document.querySelector(`#${section}-code`).innerHTML = textoEscapado;
}

function copy() {
    var shortcodes = document.querySelector('select[name=shortcodes').value;
    var section = shortcodes.trim();
    var sectionHTML = document.querySelector(`#${section}-code`).innerText
    try {
        navigator.clipboard.writeText(sectionHTML).then(function () {
            alert('Texto copiado al portapapeles');
        }).catch(function (err) {
            console.error('Error al intentar copiar el texto', err);
        });
    } catch (err) {
        console.error('Error al intentar copiar el texto', err);
    }
}