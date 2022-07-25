const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const accountNav = document.getElementsByClassName('account')[0]
const header = document.querySelectorAll('header')[0]

toggleBtn.addEventListener('click', () => {
    header.classList.toggle('active')
    navbar.classList.toggle('active')
    accountNav.classList.toggle('active')
    toggleBtn.classList.toggle('active')
})