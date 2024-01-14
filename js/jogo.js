let tabuleiro = ['','','','','','','','','']
let jogador = 0
let simbolo = ['x','o']
let fimDeJogo = false


// essa função rebece a posição em inface e marca a posição com o simbolo
function jogada(position){

    if(fimDeJogo){
        return
    }

    if(tabuleiro[position]==''){
        tabuleiro[position]=simbolo[jogador]
        fimDeJogo = ganhador()

        if(fimDeJogo == false){

            if(jogador ==  0){
                jogador = 1
            }else{
                jogador = 0
            }

        }

    }

    return fimDeJogo

}

function ganhador(){
    let estado = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [6,4,2]
    ]

    for(let posicao = 0; posicao < estado.length; posicao++){
        let sequencia = estado[posicao]
        let pos1 = sequencia[0]
        let pos2 = sequencia[1]
        let pos3 = sequencia[2]

        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] !=''){
            return true;
        }
    }
    return false
}