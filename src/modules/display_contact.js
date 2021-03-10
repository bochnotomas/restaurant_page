function displayContact() {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const section = document.createElement('section')
    section.id = "contact_section"
    const article = document.createElement('div')
    article.classList.add('article')


    const article_header = document.createElement('h1')
    article_header.innerText = "Adress:"
    article_header.classList.add('article_header')


    const article_content = document.createElement('p')
    article_content.innerText = `High Street 01, CV1 3BZ`
    article_content.classList.add('article_content')

    main.appendChild(section)
    section.appendChild(article)
    article.appendChild(article_header)
    article.appendChild(article_content)

    const article_header_map = document.createElement('h1')
    article_header_map.innerText = "Map:"
    article_header_map.classList.add('article_header')
    const article_content_map = document.createElement('div')
    article_content_map.innerHTML = `<img src="../dist/assets/images/map.jpg" alt="">`
    article_content_map.classList.add('article_content_map')

    article.appendChild(article_header_map)
    article.appendChild(article_content_map)
}

export default displayContact
