function displayContact() {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const section = document.createElement('section')
    section.id = "menu_section"
    const article = document.createElement('div')
    article.classList.add('article')

    for (let i = 0; i < 10; i++) {
        const article_header = document.createElement('h1')
        article_header.innerText = "Lorem, ipsum dolor?"
        article_header.classList.add('article_header')
        const article_content = document.createElement('p')
        article_content.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt voluptatum, sunt
            aliquid voluptate facilis cupiditate maiores harum alias sed reprehenderit recusandae ipsum
            asperiores culpa possimus, eligendi ullam similique autem.`
        article_content.classList.add('article_content')

        main.appendChild(section)
        section.appendChild(article)
        article.appendChild(article_header)
        article.appendChild(article_content)
    }
}

export default displayMenu
