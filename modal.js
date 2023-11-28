const botaoAbrirModalLambri = document.querySelector("#abrir-modal-lambri");
const botaoFecharModalLambri = document.querySelector("#fechar-modal-lambri");
const modalLambri = document.querySelector("#modal-lambri");

const botaoAbrirModalPPGAC = document.querySelector("#abrir-modal-ppgac");
const botaoFecharModalPPGAC = document.querySelector("#fechar-modal-ppgac");
const modalPPGAC = document.querySelector("#modal-ppgac");

const fade = document.querySelector("#fade");

botaoAbrirModalLambri.addEventListener("click", () => {
    modalLambri.style.display = "block";
    fade.style.display = "block";
});

botaoFecharModalLambri.addEventListener("click", () => {
    modalLambri.style.display = "none";
    fade.style.display = "none";
});

botaoAbrirModalPPGAC.addEventListener("click", () => {
    modalPPGAC.style.display = "block";
    fade.style.display = "block";
});

botaoFecharModalPPGAC.addEventListener("click", () => {
    modalPPGAC.style.display = "none";
    fade.style.display = "none";
});

fade.addEventListener("click", () => {
    modalLambri.style.display = "none";
    modalPPGAC.style.display = "none";
    fade.style.display = "none";
});