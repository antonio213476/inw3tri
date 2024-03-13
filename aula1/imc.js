let prompt = require("prompt-sync")()

let peso = prompt('Digite seu peso (Kg): ')
let altura = prompt('Digite sua altura (M): ')

let num = peso/(altura * altura)
let imc = (Math.round(num * 100)/100).toFixed(2)


function calcularImc() {
    if(imc <= 16.9) {
        return"Seu imc está muito abaixo da média"
    } else if(imc <= 18.4) {
        return"Seu imc está abaixo da média"
    } else if(imc <= 25.9) {
        return"Seu imc está na média"
    } else if(imc <= 29.9) {
        return "Seu imc está acima da média"
    } else {
        return "Seu imc está no grau de obesidade"
    }
}

console.log("Seu imc é : "+imc)
console.log(calcularImc())
