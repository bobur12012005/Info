let form = document.forms.sign_up
let inputs = form.querySelectorAll('input')
let successful_fields = document.querySelector('#success')
let error_fields = document.querySelector('#error')
let modal = document.querySelector('#modal')
let close_modal = document.querySelector('#modal button')
let body = document.body

form.onsubmit = (event) => {
    event.preventDefault()
    let error = false
    let count_error = 0
    let count_success = 7

    inputs.forEach((inp) => {
        let isRequired = inp.parentNode.classList.contains('req')

        if (isRequired && inp.value.length === 0) {
            error = true
            inp.parentNode.classList.add('error', 'warning')
            count_error++
            error_fields.innerHTML = 'Error: ' + count_error + '/7'
            count_success--
            successful_fields.innerHTML = 'Success: ' + count_success + '/7'
        } else {
            inp.parentNode.classList.remove('error')
        }
    })

    if (error) {
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