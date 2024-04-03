/**
 * Elimina boton de Mega Menu vacio
 *
if (document.querySelector(".cmm4e-toggle")) {
    document.querySelectorAll(".cmm4e-toggle").forEach((e) => {
        e.remove();
    });
}*/

/**
 * Añade a los enlaces un title o un aria-label en caso de que no lo tenga
 */
let enlace = document.querySelectorAll("a");

enlace.forEach(function (e) {
    let linkName = e.innerText;
    if (!e.title || e.title.trim() == "") {
        e.title = linkName;
    }
    if (!e.ariaLabel || e.ariaLabel.trim() == "") {
        e.ariaLabel = linkName;
    }
});

/**
 * Añade a las imagenes un title o un alt en caso de que no lo tenga
 */
let img = document.querySelectorAll("img");

img.forEach(function (e) {
    if (!e.alt || e.alt.trim() == "") {
        e.alt = "Nombre de la universidad";
    }
    if (!e.title || e.title.trim() == "") {
        e.title = "Nombre de la universidad";
    }
});

/**
 * ACCESIBILIDAD PARA LOS FORMULARIOS
 * Rellena los labels que esten vacios
 */
window.addEventListener("message", (event) => {
    if ((event.data.type === "hsFormCallback") && (event.data.eventName === "onFormReady")) {
        //*******************rellenos de etiquetas label
        let formFields = document.querySelectorAll(".hs-form-field");
        formFields.forEach((e) => {
            let label = e.querySelector("label");
            label.classList.add("remove");
            document
                .querySelector(".legal-consent-container label")
                .classList.remove("remove");
            document
                .querySelector(".hs-dependent-field label")
                .classList.remove("remove");
            document
                .querySelector(".hs-fieldtype-booleancheckbox label")
                .classList.remove("remove");
            if (label.classList.contains("remove")) {
                label.querySelector("span").innerText = "*";
                label.style.display = "none";
            }
        });

        //*****************Añadir un label al select de prefijo teléfono
        var contenedor = document.querySelector(".hs-fieldtype-intl-phone");
        var select = document.querySelector('.hs-fieldtype-intl-phone [id^="phone_ext-"]')
        // Crea la etiqueta label
        var label = document.createElement("label");
        // Asigna el valor del atributo "for" con el ID del select
        label.setAttribute("for", select.id);
        // Agrega el texto deseado al label
        label.textContent = "*";
        label.style.display = "none";
        // Inserta el label antes del select en el DOM
        contenedor.insertBefore(label, select);
        var labelHS = document.querySelectorAll('.hs-form-field > label');
        labelHS.forEach(element => {
            element.style.display = "none";
        })

        //***************************Aria-label a los select
        let selectFormHs = document.querySelectorAll('form select')
        selectFormHs.forEach(element => {
            var optionDisabled = element.querySelector('option[disabled]').textContent;
            element.setAttribute("aria-label", optionDisabled);
        })
        let inputFormHs = document.querySelectorAll('form input')
        inputFormHs.forEach(element => {
            var placeholderInput = element.placeholder
            element.setAttribute("aria-label", placeholderInput)
        })
        let textareaFormHs = document.querySelectorAll('form textarea')
        textareaFormHs.forEach(element => {
            var placeholderTextarea = element.placeholder
            element.setAttribute("aria-label", placeholderTextarea)
        })
    }
        /**
         * **** SOLO APLICA A CBT ****
         */

        let parrafos = document.querySelectorAll("form p");

        parrafos.forEach(function (parrafo) {
            if (parrafo.textContent.trim() === "") {
                parrafo.remove();
            }
        });
});

/***********************************************************************************************
 * Elimina error de un Label en Cookiebot
**********************************************************************************************/
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Esperar a que el elemento del banner de Cookiebot esté presente
    var waitForCookiebotBanner = setInterval(function() {
        var cookiebotBanner = document.getElementById('CybotCookiebotDialog');
        // Verificar si el elemento está presente
        if (cookiebotBanner) {
            // Detener el intervalo ya que el elemento está presente
            clearInterval(waitForCookiebotBanner);
            // Llamar a tu función o código cuando el banner de Cookiebot esté cargado
            miFuncionCuandoCookiebotCargado();
        }
    }, 100); // Verificar cada 100 milisegundos
});

// Función a ejecutar cuando el banner de Cookiebot esté cargado
function miFuncionCuandoCookiebotCargado() {
    let div = document.querySelector(
        ".CybotCookiebotDialogBodyLevelButtonWrapper.CybotCookiebotDialogBodyContentControlsWrapper.CybotCookiebotDialogHide"
    );
    let form = div.querySelector(
        ".CybotCookiebotDialogBodyLevelButtonWrapper form"
    );
    let checkbox = div.querySelector(
        "#CybotCookiebotDialogBodyContentCheckboxPersonalInformation"
    );
    let label = div.querySelector(".CybotCookiebotDialogBodyLevelButtonLabel");
    if (form && checkbox && label) {
        form.insertBefore(label, checkbox);
    }
}
