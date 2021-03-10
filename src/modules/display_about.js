function displayAbout() {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const section = document.createElement('section')
    section.id = "contact_section"
    const article = document.createElement('div')
    article.classList.add('article')


    const article_header = document.createElement('h1')
    article_header.innerText = "About us:"
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

    const article_header_photo = document.createElement('h1')
    article_header_photo.innerText = "This is us:"
    article_header_photo.classList.add('article_header')
    const article_content_photo = document.createElement('div')
    article_content_photo.innerHTML = `<img src="../dist/assets/images/family.png" alt="">`
    article_content_photo.classList.add('article_content_photo')

    article.appendChild(article_header_photo)
    article.appendChild(article_content_photo)
}

export default displayAbout
