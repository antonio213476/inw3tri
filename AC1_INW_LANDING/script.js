const theBody = document.querySelector('body')

window.onload = function (){
    main()
}

function main(){
    theBody.style.margin = '0'
    
    const div = document.createElement('div')
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const a = document.createElement('a')
    const button = document.createElement('button')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const hr = document.createElement('hr')
    const img = document.createElement('img')

    hr.style.margin = '0'

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
    
    theBody.appendChild(hr.cloneNode(true))


    // Main Body

    // QuemSou
    const divTextinho = div.cloneNode(true)
    divTextinho.style.marginLeft = '2rem'
    divTextinho.style.marginTop = '5rem'
    divTextinho.style.marginBottom = '5rem'
    divTextinho.style.paddingRight = '50%'

    const quemSou = h1.cloneNode(true)
    quemSou.textContent = 'Quem sou'

    const textinho = p.cloneNode(true)
    textinho.textContent = 'Eu sou um profissional, programador full stack programo todas as linguagens eu manjo muito disso e odeio dom esse negocio é muito chato pq tenho que programar nisso por favor eu não aguento mais quero ver react e não definir 30 p diferente '


    theBody.appendChild(divTextinho)
    divTextinho.appendChild(quemSou)
    divTextinho.appendChild(textinho)
    theBody.appendChild(hr.cloneNode(true))

    // Habilidades
    const divHabilidades = div.cloneNode(true)
    divHabilidades.style.marginTop = '2rem'
    divHabilidades.style.marginBottom = '2rem'
    divHabilidades.style.paddingRight = '2rem'
    divHabilidades.style.paddingLeft = '2rem'
    divHabilidades.classList.add('d-flex','justify-content-center')

    const habilidadesTexto = h1.cloneNode(true)
    habilidadesTexto.textContent = 'Conhecimentos'

    theBody.appendChild(divHabilidades)
    divHabilidades.appendChild(habilidadesTexto)


    // imagens
    const divBabas = div.cloneNode(true)
    divBabas.classList.add('d-flex','justify-content-center')

    const divNegocio = div.cloneNode(true)
    divNegocio.classList.add('row')
    divNegocio.style.marginLeft = '5rem'
    divNegocio.style.marginRight = '5rem'
    divNegocio.style.marginBottom = '5rem'

    const divCol = div.cloneNode(true)
    divCol.classList.add('col')

    const imagem = img.cloneNode(true)  
    imagem.classList.add('img-fluid')




    theBody.appendChild(divBabas)
    divBabas.appendChild(divNegocio)

    imagem.src = 'Imgs/css.png'
    divCol.appendChild(imagem)
    divNegocio.appendChild(divCol.cloneNode(true))
    
    imagem.src = 'Imgs/html.png'
    divCol.appendChild(imagem)
    divNegocio.appendChild(divCol.cloneNode(true))
  
    imagem.src = 'Imgs/js.png'
    divCol.appendChild(imagem)
    divNegocio.appendChild(divCol.cloneNode(true))

    imagem.src = 'Imgs/lua.png'
    divCol.appendChild(imagem)
    divNegocio.appendChild(divCol.cloneNode(true))
   
    theBody.appendChild(hr.cloneNode(true))

    theBody.appendChild(script)
}

