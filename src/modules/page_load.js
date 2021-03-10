function pageLoad() {
    //wrapper div #content
    const content = document.querySelector('#content')
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())


}

function createHeader() {

    //header
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    nav.innerHTML = `<img src="/dist/assets/images/restaurant-pngrepo-com.png" alt="">`
    const nav_ul = document.createElement('ul')
    nav_ul.innerHTML = `<li><a href="" id="menu">Menu</a></li><li><a href="" id="contact">Contact</a></li><li><a href="" id="about">About Us</a></li>`
    const slogan = document.createElement('section')
    slogan.classList.add("slogan")
    const slogan_content = document.createElement('div')
    slogan_content.classList.add("slogan_content")
    const slogan_heading = document.createElement('h1')
    slogan_heading.classList.add("slogan_heading")
    slogan_heading.innerText = "Best pizza in the world. Have you tasted better?"
    const slogan_action = document.createElement('button')
    slogan_action.classList.add('slogan_action')
    slogan_action.innerHTML = `<a href="">Order</a>`
    //header build
    header.appendChild(nav)
    nav.appendChild(nav_ul)
    header.appendChild(slogan)
    slogan.appendChild(slogan_content)
    slogan_content.appendChild(slogan_heading)
    slogan_content.appendChild(slogan_action)

    return header
}

function createMain() {
    //main
    const main = document.createElement('main')
    const section = document.createElement('section')
    const article = document.createElement('div')
    article.classList.add('article')
    const article_header = document.createElement('h1')
    article_header.innerText = "Lorem, ipsum dolor?"
    article_header.classList.add('article_header')
    const article_content = document.createElement('p')
    article_content.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt voluptatum, sunt
    aliquid voluptate facilis cupiditate maiores harum alias sed reprehenderit recusandae ipsum
    asperiores culpa possimus, eligendi ullam similique autem.
    Atque fuga cupiditate minus obcaecati quasi nesciunt quisquam quibusdam. Ipsam pariatur, minima
    ipsa sunt quisquam iure dignissimos mollitia eligendi libero quo maxime, dicta laborum nobis.
    Eius enim cumque optio vel!`
    article_content.classList.add('article_content')
    //main build
    main.appendChild(section)
    section.appendChild(article)
    article.appendChild(article_header)
    article.appendChild(article_content)

    return main
}

function createFooter() {
    //footer
    const footer = document.createElement('footer')
    const strong = document.createElement('strong')
    strong.innerText = "Tomas Bochnovic © 2021"
    //footer build
    footer.appendChild(strong)

    return footer
}

export default pageLoad