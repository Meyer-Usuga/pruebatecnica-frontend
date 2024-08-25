/** Lógica para la página de inicio */

function scrollSections(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({
        behavior: 'smooth'
    });

}

/** Lógica para la galería de imágenes */
const hairCuts = [
    {
        id: '1',
        name: 'Fade',
        description: 'Corte con transición suave de corto a largo, ideal para un look moderno.',
        image: 'corte1.png'
    },
    {
        id: '2',
        name: 'Degradado',
        description: 'Cambio gradual en la longitud del cabello, de corto a largo.',
        image: 'corte2.jpg'
    },
    {
        id: '3',
        name: 'Comb over',
        description: 'Cabello largo en la parte superior, peinado hacia un lado, con lados cortos.',
        image: 'corte3.jpg'
    },
    {
        id: '4',
        name: 'César',
        description: 'Corte con flequillo corto hacia adelante y lados cortos.',
        image: 'corte4.jpg'
    },
    {
        id: '5',
        name: 'A rayas',
        description: 'Incluye líneas decorativas en el cabello para un toque único.',
        image: 'corte5.jpg'
    },
    {
        id: '6',
        name: 'Spiky',
        description: ' Cabello corto peinado hacia arriba en picos.',
        image: 'corte6.jpg'
    },
];

const modal_info = document.getElementById("modal-information");

function showModal(typeCutId) {

    const modalBody = document.getElementById("modal-body");
    let data = hairCuts.find(data => data.id === typeCutId);

    if (data) {
        modalBody.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.description}</p>
            <img src="../images/${data.image}">
        
        `;
    }
    else {
        modalBody.innerHTML = `
       No se encontro el elemento no existe.
    
    `;
    }

    modal_info.showModal();
}

function closeModal() {
    modal_info.close();
}

/** Lógica para la página de contacto */

