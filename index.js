import 'intersection-observer'
import 'normalize.css'
import './scss/index.scss'

const $navToggleButton = document.getElementById('nav-toggle-button')
const $navList = document.getElementById('nav-toggle')
const $navItems = document.querySelectorAll('.nav__link')

// nav toggle on mobile

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

// change nav background on scroll

const $header = document.querySelector('.header')
const $homeSection = document.getElementById('home')

const aboutSectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                $header.classList.add('header-scrolled')
            } else {
                $header.classList.remove('header-scrolled')
            }
        })
    },
    {
        rootMargin: '-200px 0px 0px 0px',
    },
)

aboutSectionObserver.observe($homeSection)
