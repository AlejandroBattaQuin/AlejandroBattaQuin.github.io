fetch('./assets/db/biblioteca.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new Error('El formato de los datos no es un array.');
        }

        const select = document.querySelector('.title-books');
        const booksContainer = document.querySelector('.books');
        const searchInput = document.getElementById('search-input');

        // Función para mostrar libros
        const displayBooks = (books) => {
            let booksHTML = '';
            books.forEach(item => {
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
            booksContainer.innerHTML = booksHTML;
        };

        // Mostrar todos los libros al cargar la página
        displayBooks(data);

        // Filtrar libros basados en la búsqueda
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredBooks = data.filter(item => 
                item.titulo.toLowerCase().includes(searchTerm) || 
                (item.subtitulo && item.subtitulo.toLowerCase().includes(searchTerm))
            );
            displayBooks(filteredBooks);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
