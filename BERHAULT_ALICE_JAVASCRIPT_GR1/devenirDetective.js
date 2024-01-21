let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()

        let email = document.querySelector('#email')
    
        if(email.value == '') {
            email.classList.remove('success')
            email.classList.add('faux')
            console.log('Invalide !')
        } else {
            email.classList.remove('faux')
            email.classList.add('success')
            console.log('Valide !')
        }

    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')

    if(pseudo.value == '') {

        errorContainer.classList.add('visible')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        pseudo.classList.add('faux')
        err.innerHTML = "Le champ nom et prénom ne peut pas être vide."
        
        errorList.appendChild(err)
    } else {
        pseudo.classList.add('success')
    }

    if(email.value == '') {

        errorContainer.classList.add('visible')
        email.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Le champ email ne peut pas être vide."
        
        errorList.appendChild(err)
    } else {
        email.classList.add('success')
    }

    let level = document.querySelector('#level')

    if(level.value == '') {

        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerHTML = "Le champ niveau d'études de peut pas être vide."
        
        errorList.appendChild(err)
    } else {
        level.classList.add('success')
    }

    let successContainer = document.querySelector('.message-success')
    console.log(successContainer)
    successContainer.classList.remove('visible')

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        level.classList.contains("success") 
    ) {
        successContainer.classList.add('visible')
    }
})