const icon = document.querySelector('.icon')
const body = document.body
const btn = document.querySelector('.btn')
const yearCopy = document.querySelector('.year')

icon.addEventListener('click', () => {
    body.classList.toggle('light')
    btn.classList.toggle('btn-light')
})

yearCopy.innerHTML = (new Date().getFullYear());

