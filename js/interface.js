document.addEventListener('DOMContentLoaded',quadrante)

function quadrante(){
    let quadrante = document.querySelectorAll(".quadrante")
    quadrante.forEach((indice) => {
        indice.addEventListener('click',cliclado)
    });
}

function cliclado(event){
    console.log(event.target)
    let quadrante = event.target
    let posicao = quadrante.id
    jogada(posicao)
    atualizaQuadrante()
}

function atualizaQuadrante(){
    let quadrante = document.querySelectorAll(".quadrante")

    quadrante.forEach((indice) => {
        alert(indice.id)
        let posicao = indice.id
        simbolo = tabuleiro[posicao]

        if(simbolo != ''){

            
            indice.innerHTML=`<div class='${simbolo}'></div>`

        }

    });

}


