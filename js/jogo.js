let tabuleiro = ['','','','','','','','','']
let jogador = 0
let simbolo = ['x','o']

function jogada(position){
    tabuleiro[position]=simbolo[jogador]
    if(jogador ==  0){
        jogador = 1
    }else{
        jogador = 0
    }
}