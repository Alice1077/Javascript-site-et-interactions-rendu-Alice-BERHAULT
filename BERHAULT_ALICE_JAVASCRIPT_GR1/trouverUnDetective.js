let nuit = document.querySelector('.nuit')
let main = document.querySelector('.light')

nuit.addEventListener('click', () => {

    if(main.classList.contains('dark')) {
        main.classList.add('light')
        main.classList.remove('dark')
        nuit.innerHTML = "Dark Mode"
    } else if(main.classList.contains('light')) {
        main.classList.add('dark')
        main.classList.remove('light')
        nuit.innerHTML = "Light Mode"
    }
    
})