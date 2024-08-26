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

const modal_info = document.getElementById("modal-info");

function showInformation(typeCutId) {
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

function closeModal(idModal) {
    if(idModal == 'modal-info'){
        modal_info.close();
    }
    else if(idModal == 'modal-alert'){
        modal_alert.close();
    }
}

/** Lógica para la página de contacto */

const names = document.getElementById("txtName");
const email = document.getElementById("txtEmail");
const subject = document.getElementById('txtSubject');
const message = document.getElementById("txtMessage");
const form = document.getElementById("form");
const modal_alert = document.getElementById("modal-alert");

form.addEventListener("submit", e => {
    e.preventDefault();
});

function validate() {

    // Cuerpod del modal
    const modalBody = document.getElementById("modal-body");
    
    // Alertas del formulario
    const alert_name = document.getElementById('alert-name');
    const alert_email = document.getElementById('alert-email');
    const alert_subject = document.getElementById('alert-subject');
    const alert_message = document.getElementById('alert-message');
    const alert_form = document.getElementById('alert-form');

    // Validación regex para el email
    let regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (names.value && email.value) {
        console.log(email.value)
        if (names.value.length < 6) {
            alert_name.style.display = 'grid';
        }
        else if (!regex.test(email.value)) {
            alert_email.style.display = 'grid';
        }
        else if(subject.value.length < 6){
            alert_subject.style.display = 'grid';
        }
        else if(message.value.length < 6){
            alert_message.style.display = 'grid';
        }
        else{
            modalBody.innerHTML = `
            <h3>¡Listo!</h3>
            El mensaje se envió exitosamente y pronto lo revisaremos.`;
    
            modal_alert.showModal();
        }
    }
    else {
        alert_form.style.display = 'grid';
    }
}