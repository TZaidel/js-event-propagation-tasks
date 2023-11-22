const openBtn = document.getElementById('openModalBtn')
const closeBtn = document.getElementById('closeModalBtn')
const overlay = document.getElementById('overlay')
const form = document.getElementById('form')
const checkbox = document.querySelector('.checkbox')
const submitBtn = document.querySelector('.submit-btn')


openBtn.addEventListener('click', onOpenBtn)
closeBtn.addEventListener('click', onCloseBtn)
overlay.addEventListener('click', onCloseBtn)
form.addEventListener('submit', onSubmit)


function onOpenBtn(event) {
    document.body.classList.add('open')
    window.addEventListener('keydown', onEscape)

}

function onCloseBtn(event) {
    document.body.classList.remove('open')
    window.removeEventListener('keydown', onEscape)

}

function onEscape(event) {
    if (event.code === "Escape") {
        onCloseBtn()
    }
}

function onSubmit(event) {
    event.preventDefault()
    const { email, password, comment } = event.currentTarget.elements
    if (password.value.length < 6) {
        return console.log('must be > 6')
    }
    const obj = {
        email: email.value,
        password: password.value,
        comment: comment.value
    }
    console.log(obj)

    onCloseBtn()
}

checkbox.addEventListener('change', onChange)

function onChange(event) {
    submitBtn.disabled = !event.target.checked
    console.log(event.target.checked)
}