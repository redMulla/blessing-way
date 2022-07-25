const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const accountNav = document.getElementsByClassName('account')[0]
const header = document.querySelectorAll('header')[0]
const slideImg = document.getElementById('slideImg')

toggleBtn.addEventListener('click', () => {
    header.classList.toggle('active')
    navbar.classList.toggle('active')
    accountNav.classList.toggle('active')
    toggleBtn.classList.toggle('active')
})

const images = new Array (
    "ressource/images/cow1.jpg",
    "ressource/images/cow2.jpg",
    "ressource/images/milk3.jpg",
    "ressource/images/milk1.jpg",
)

const length = images.length;
let i = 0;

const slider = () => {
    if(i > length - 1) {
        i = 0
    }

    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000)
}