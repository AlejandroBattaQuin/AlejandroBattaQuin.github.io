fetch('./assets/db/biblioteca.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const books = document.querySelector('.books');
        let booksHTML = ''; // Acumulador de HTML

        data.forEach(item => {
            booksHTML += `<div class="book">
                <div class="book-image"><img src="./assets/img/logo/logo-locus-cognitionis.svg" alt=""></div>
                <div class="book-text">
                    <h4>${item.titulo}</h4>
                    <h5>${item.subtitulo}</h5>
                    <p>Autor: ${item.autor}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur repellendus
                        numquam est, laboriosam aspernatur itaque impedit sint? Dolores illum atque impedit quas
                        reprehenderit harum. Veniam nihil et recusandae quis?</p>
                    <a href='./libro.html?utm_cod=${item.cod}'>Ver más</a>
                </div>
            </div>`;
        });

        // Establece el contenido de 'books' una vez fuera del loop
        books.innerHTML = booksHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });