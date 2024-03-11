const theBody = document.querySelector('body')

window.onload = function (){
    main()
}

function navBar(){
    theBody.style.margin = '0'
    
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    const button = document.createElement('button')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')

    // Navbar
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
    script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
    script.crossOrigin = 'anonymous'

    const navBar = document.createElement('nav')
    navBar.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary')

   
    const containerFluid = div.cloneNode(true)
    containerFluid.classList.add('container-fluid')

    const navBarBrand = a.cloneNode(true)
    navBarBrand.classList.add('navbar-brand')
    navBarBrand.textContent = 'Meu Portifolio'

    const navbarCollapse = div.cloneNode(true)
    navbarCollapse.classList.add('collapse','navbar-collapse')
    navbarCollapse.id = 'navBarThing'

    const navbarNav = ul.cloneNode(true)
    navbarNav.classList.add('navbar-nav', 'me-auto', 'mb-2', 'mb-lg-0')

    const navItem = li.cloneNode(true)
    navItem.classList.add('nav-item')

    const navlink = a.cloneNode(true)
    navlink.classList.add('nav-link')
    
    const navbartoggler = button.cloneNode(true)
    navbartoggler.classList.add('navbar-toggler')
    navbartoggler.type = 'button'
    navbartoggler.setAttribute('data-bs-toggle','collapse')
    navbartoggler.setAttribute('data-bs-target','#navBarThing')
    navbartoggler.setAttribute('aria-controls','navBarThing')
    navbartoggler.setAttribute('aria-expanded','false')
    navbartoggler.setAttribute('aria-label','Toggle navigation')

    const togglerIcon = span.cloneNode(true)
    togglerIcon.classList.add('navbar-toggler-icon')

    theBody.appendChild(navBar)
    navBar.appendChild(containerFluid)
    containerFluid.appendChild(navbarCollapse)
    containerFluid.appendChild(navbartoggler)
    navbartoggler.appendChild(togglerIcon)
    navbarCollapse.appendChild(navbarNav)

    navItem.appendChild(navlink)

    navbarNav.appendChild(navBarBrand)
    navlink.textContent='Home'
    navbarNav.appendChild(navItem.cloneNode(true))
    navlink.textContent='Sobre'
    navbarNav.appendChild(navItem.cloneNode(true))
    navlink.textContent='Contato'
    navbarNav.appendChild(navItem.cloneNode(true))

    theBody.appendChild(script)


    // Main Body

}
