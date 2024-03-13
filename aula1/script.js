const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')
const filmeInput = document.querySelector('#filmeInput')

btn1.addEventListener('click', ()=> {
    const itemLista = document.createElement('li')
    listaFilmes.append(itemLista)
    itemLista.innerHTML = filmeInput.value
    itemLista.style.backgroundColor = 'red'
    itemLista.classList.add(fundo-azul)
})  