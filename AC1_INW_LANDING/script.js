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
    theBody.appendChild(navBar)
    
    const textNavBar = document.createElement('h2')
    textNavBar.style.margin = '0'
    textNavBar.style.marginLeft = '2%'
    textNavBar.textContent = 'Bienvenido a mi sitio'
    textNavBar.style.fontWeight = '600'
    navBar.appendChild(textNavBar)

}