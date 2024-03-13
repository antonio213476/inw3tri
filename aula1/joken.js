let prompt = require("prompt-sync")()
const rng = Math.floor(Math.random() * 3) 

console.log('Escolha entre:\n\n[0] Pedra\n[1] Tesoura\n[2] Papel\n')

let escolha = Number(prompt(''))

function escolher(esc) {
    switch(esc) {
        case 0:
            return 'Pedra'
        case 1: 
            return 'Tesoura'
        case 2: 
            return 'Papel'
    }
}
/*

    [0] = Pedra
    [1] = Tesoura
    [2] = Papel

*/




console.log('Você escolheu: '+ escolher(escolha))
console.log('Computador escolheu: '+escolher(rng))

switch(escolha) {
    case 0: 
        if(rng===1) {
            console.log('Venceu!')
        }else if(rng===0) {
            console.log('Empatou!')
        } else {
            console.log('Perdeu...')
        }
        break;
    case 1: 
        if(rng===2) {
            console.log('Venceu!')
        }else if(rng===1) {
            console.log('Empatou!')
        } else {
            console.log('Perdeu...')
        }
        break;
    case 2: 
        if(rng===0) {
            console.log('Venceu!')
        }else if(rng===2) {
            console.log('Empatou!')
        } else {
            console.log('Perdeu...')
        }
        break;
    default:
        console.log('Escolha invalida')
        break;
    
}
