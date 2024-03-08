const theBody = document.querySelector('body')

window.onload = function (){
    main()
}

function main(){
    theBody.style.margin = '0'

    const navBar = document.createElement('div')
    navBar.classList.add('navBar')
    navBar.style.width = '100%'
    navBar.style.height = '100px'
    navBar.style.backgroundColor = '#b35729'
    navBar.style.display = 'flex'
    navBar.style.alignItems = 'center'
    
    const textBig = document.createElement('h2')
    textBig.style.margin = '0'
    textBig.style.marginLeft = '2%'
    textBig.textContent = 'Bemvindo a meu site'
    const cloneTextBig = textBig.cloneNode(true)

    const divQuemSou = document.createElement('div')
    divQuemSou.style.marginTop = '2rem'
    divQuemSou.style.display = 'flex'
    divQuemSou.classList.add('quemSou') 

    const tableCoiso = document.createElement('table')
    tableCoiso.style.width = '100%'

    const tableQuemSou = document.createElement('td')
    tableQuemSou.classList.add('TdQuemSou')
    tableQuemSou.style.width = '50%'
    tableQuemSou.style.alignSelf = 'top'
    const cloneQuem = tableQuemSou.cloneNode(true)


    const textoQuemSou2 = document.createElement('img')
    textoQuemSou2.style.width = '50%'
    textoQuemSou2.src = 'https://picsum.photos/200/300'

    theBody.appendChild(navBar)
    theBody.appendChild(divQuemSou)

    navBar.appendChild(textBig)
  
    divQuemSou.appendChild(tableCoiso)
    tableCoiso.appendChild(tableQuemSou)
    
    cloneTextBig.textContent = 'Quem sou'
    tableQuemSou.appendChild(cloneTextBig)
    tableCoiso.appendChild(tableQuemSou)

    
    cloneQuem.appendChild()
    tableCoiso.appendChild(cloneQuem)
}
