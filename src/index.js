import pageLoad from './modules/page_load'
import displayMenu from './modules/display_menu'
import displayContact from './modules/display_contact'
import displayAbout from './modules/display_about'

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
        menu_section.scrollIntoView()
    })
    contact.addEventListener('click', (e) => {
        e.preventDefault()
        displayContact()
        const contact_section = document.querySelector('#contact_section')
        contact_section.scrollIntoView()
    })

    aboutUs.addEventListener('click', (e) => {
        e.preventDefault()
        displayAbout()
        const contact_section = document.querySelector('#contact_section')
        contact_section.scrollIntoView()
    })
}

homePage()