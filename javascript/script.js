
/** Lógica para controlar el menú */

/** Lógica para el botón de desplazamiento */

function scrollSections(id){
    const section = document.getElementById(id); 
    section.scrollIntoView({
        behavior: 'smooth'
    }); 

}
