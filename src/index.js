import pageLoad from './modules/page_load'
import displayMenu from './modules/display_menu'

function homePage() {
    //homePage build load
    pageLoad()

    const menu = document.querySelector("#menu")
    const contact = document.querySelector("#contact")
    const aboutUs = document.querySelector("#about")

    menu.addEventListener('click', (e) => {
        e.preventDefault()
        displayMenu()
        const menu_section = document.querySelector('#menu_section')
        menu_section.scrollIntoView();
    })
    contact.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(contact)
    })

    aboutUs.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(aboutUs)
    })
}

homePage()