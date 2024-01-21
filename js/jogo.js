let tabuleiro = ['','','','','','','','','']
let player = 0
let simbolo = ['x','o']
let fimDeJogo = false


// essa função rebece a posição em interface e marca a posição com o simbolo
//function jogada(position){
function jogada(position,player){
    if(fimDeJogo){
        return
    }

    if(tabuleiro[position]==''){
        tabuleiro[position]=simbolo[player]
        fimDeJogo = ganhador()

        if(fimDeJogo == false){

            if(player ==  0){
                player = 1
            }else{
                player = 0
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