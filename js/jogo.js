let tabuleiro = ['','','','','','','','','']
let jogador = 0
let simbolo = ['x','o']

// essa função rebece a posição em inface e marca a posição com o simbolo
function jogada(position){
    if(tabuleiro[position]==''){
        tabuleiro[position]=simbolo[jogador]
        if(jogador ==  0){
            jogador = 1
        }else{
            jogador = 0
        }
    }
    
}