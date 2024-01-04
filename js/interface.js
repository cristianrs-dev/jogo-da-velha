
document.addEventListener('DOMContentLoaded',quadrante)

function quadrante(){
    let quadrante = document.querySelectorAll(".quadrante")
    quadrante.forEach((indice) => {
        indice.addEventListener('click',cliclado)
    });
}

function cliclado(event){
    console.log(event.target)
}
