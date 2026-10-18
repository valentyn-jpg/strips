const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.nav a')

burger.onclick = () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
}

links.forEach(link => {
    link.onclick = () => {
        burger.classList.remove('active')
        nav.classList.remove('active')
    }
})