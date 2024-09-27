document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const closebtn = document.querySelector('.closebtn');

    // Inicializa la alerta oculta
    const alertCard = document.getElementById('alert-card');
    alertCard.style.display = 'none';

    if (dropbtn) {
        dropbtn.addEventListener('click', function() {
            const isMobile = window.innerWidth <= 768;
            dropdownContent.classList.toggle('fullscreen', isMobile);
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }

    if (closebtn) {
        closebtn.addEventListener('click', function() {
            dropdownContent.style.display = 'none'; // Cerrar el menú
        });
    }

    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0); // Desplazarse a la parte superior justo antes de recargar
    });
    
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden'); // Agrega la clase para ocultar el cargador
        }, 4000); // Espera 4 segundos
    }
});

// Código para el carrusel
const track = document.querySelector('.carousel-track');
if (track) {
    const images = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const imageWidth = images[0].getBoundingClientRect().width;

    let currentIndex = 0;

    function updateCarousel() {
        const amountToMove = -imageWidth * currentIndex;
        track.style.transform = `translateX(${amountToMove}px)`;
    }

    // Mover a la siguiente imagen
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    // Mover a la imagen anterior
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    // Navegar con teclas de flecha
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nextButton?.click();
        } else if (event.key === 'ArrowLeft') {
            prevButton?.click();
        }
    });
}

window.scrollTo(0, 0);
// script.js

// Espera a que la ventana se haya cargado completamente
window.addEventListener('load', function() {
    // Selecciona el elemento del loader por su ID
    const loader = document.getElementById('loader');
    
    // Añade la clase 'hidden' al loader para ocultarlo
    loader.classList.add('hidden');

    // También puedes añadir un pequeño retraso antes de ocultarlo, si deseas un efecto
    setTimeout(() => {
        loader.classList.add('hidden'); // Asegura que se aplique la clase 'hidden'
    }, 500); // Cambia 500 a cualquier cantidad de milisegundos que prefieras
});
// script.js

// Muestra la alerta principal al cargar la página
window.onload = function() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('alert').classList.remove('hidden');
};

// Función para cerrar la alerta principal
function closeMainAlert() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('alert').classList.add('hidden');
}

// Función para mostrar la alerta de la tarjeta
function showAlert(message) {
    const alertCard = document.getElementById('alert-card');
    const alertMessage = document.getElementById('alert-message');
    
    alertMessage.textContent = message; // Establece el mensaje de la alerta
    alertCard.style.display = 'flex'; // Muestra la alerta de la tarjeta
}

// Función para cerrar la alerta de la tarjeta
function closeCardAlert() {
    const alertCard = document.getElementById("alert-card");
    alertCard.style.display = "none"; // Oculta la alerta de la tarjeta
}

// Función para cerrar la card por su ID
function closeCard(cardId) {
    document.getElementById(cardId).classList.add('hidden'); // Cierra la card
}
