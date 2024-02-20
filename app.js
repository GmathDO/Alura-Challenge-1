/*Evento para reescalado automatico del textarea*/
const textarea = document.querySelector(".texto-resultado")
textarea.addEventListener("keyup", e=>{
    textarea.style.height = "auto";
    let scrollHeight = e.target.scrollHeight;
    textarea.style.height = `${scrollHeight}px`
})

/*Intercambiamos la imagen por el resultado del (des)encriptado*/
const cifrar = document.querySelector(".encriptar")
const desencriptar = document.querySelector(".desencriptar")

cifrar.addEventListener("click", intercambiarElementos);
desencriptar.addEventListener("click", intercambiarElementos);

function intercambiarElementos(){
    let conResultado = document.querySelectorAll(".con-resultado");
    let sinResultado = document.querySelector(".sin-resultado");
    let resultado = document.querySelector(".resultado")
    
    sinResultado.style.display = "none"
    conResultado[0].style.display = "block"
    conResultado[1].style.display = "block"
    resultado.style.justifyContent = "space-around"
    resultado.style.alignContent = "stretch"
    resultado.style.padding = "3% 0"
}