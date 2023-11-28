const links = document.querySelectorAll('.perfil-item-texto');
const secoes = document.querySelectorAll('section');

function setActiveLink() {
    const scrollY = window.scrollY;

    secoes.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isLastSection = index === secoes.length - 1;

        if (rect.top <= 100 && (isLastSection || rect.bottom > 100)) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
}

// Atualize os links de navegação quando a página é carregada e quando ocorrem eventos de rolagem
window.addEventListener('load', setActiveLink);
window.addEventListener('scroll', setActiveLink);

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


function mostrarMenu() {
    let menuMobile = document.querySelector(".mobile-conteudo")
    if(menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open")
        document.querySelector(".mobile-icone").src = "img/menu.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector(".mobile-icone").src = "img/arrow.png"
    }
}