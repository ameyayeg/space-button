const icon = document.querySelector('.icon')
const body = document.body
const btn = document.querySelector('.btn')

icon.addEventListener('click', () => {
    body.classList.toggle('light')
    btn.classList.toggle('btn-light')
})

