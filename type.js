const elemento = document.querySelector(".inicio-titulo")
const texto = "Desenvolvedor Wordpress"
const intervalo = 180

function escrever(elemento, texto, intervalo) {

    const char = texto.split("").reverse()

    const digitador = setInterval(() => {
        if(!char.length) {
            return clearInterval(digitador)
        }

        const prox = char.pop()

        elemento.innerHTML += prox
        
    }, intervalo)
}

escrever(elemento, texto, intervalo)