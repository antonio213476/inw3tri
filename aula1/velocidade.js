let limite = 60
let prompt = require('prompt-sync')()
let multa = 100

let velocidade = prompt('Digite sua velocidade: ')

function verVelocidade() {
    velocidade = parseFloat(velocidade)
    // verificar se ta acima do limite
    if(velocidade > limite) {
       // retorna isso se a condição for verdadeira
       return 'Você está '+(velocidade-limite)+' km/h acima da velocicade! Sua multa será: R$'+(velocidade - limite) * multa
    }
    // retorna isso se a condição acima retonar falsa
    return 'Você ainda está abaixo do limite, continue assim.'
}

console.log(verVelocidade())