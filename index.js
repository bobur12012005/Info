let form = document.forms.sign_up
let inputs = form.querySelectorAll('input')
let successful_fields = document.querySelector('#success')
let error_fields = document.querySelector('#error')
let modal = document.querySelector('#modal')
let close_modal = document.querySelector('#modal button')
let body = document.body

let regs = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    mom: /^[a-z ,.'-]+$/i,
    dad: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,1}$/i,
    phone: /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
    email: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i
}

form.onsubmit = (event) => {
    event.preventDefault()
    let error = false
    let count_error = 0
    let count_success = 7

    inputs.forEach(inp => {
        let isRequired = inp.parentNode.classList.contains('req')
        let reg = regs[inp.name]

        if (isRequired && inp.value.length === 0) {
            error = true
            inp.parentNode.classList.add('error')
            count_error++
            error_fields.innerHTML = 'Error: ' + count_error + '/7'
            count_success--
            successful_fields.innerHTML = 'Success: ' + count_success + '/7'
        } else if (reg && !reg.test(inp.value)) {
            error = true
            inp.parentNode.classList.add('error')
            count_error++
            error_fields.innerHTML = 'Error: ' + count_error + '/7'
            count_success--
            successful_fields.innerHTML = 'Success: ' + count_success + '/7'
        }
    })

    if (error === true) {
        modal.style.display = 'flex'
        close_modal.onclick = () => {
            modal.style.display = 'none'
        }
        return
    }
    submit(event.target)
}

function submit(form) {
    let fm = new FormData(form)
    let user = {}
    fm.forEach((val, key) => user[key] = val)
    console.log(user)
}