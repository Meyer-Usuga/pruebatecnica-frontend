/** Lógica para la página de inicio */

function scrollSections(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({
        behavior: 'smooth'
    });

}