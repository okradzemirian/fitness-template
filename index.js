import 'normalize.css'
import './scss/index.scss'

const $navToggleButton = document.getElementById('nav-toggle-button')
const $navList = document.getElementById('nav-toggle')
const $navItems = document.querySelectorAll('.nav__link')

const toggleNavOpen = () => {
    $navList.classList.toggle('nav__list--open')
    document
        .querySelector('.nav-toggle-button')
        .classList.toggle('nav-toggle-button--open')
}

$navToggleButton.addEventListener('click', () => {
    toggleNavOpen()
})

$navItems.forEach($navItem => {
    $navItem.addEventListener('click', toggleNavOpen)
})
