document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper(".mon-slider", {
        navigation : {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev"
        },
        pagination: {
        el : ".swiper-pagination",
        },
        autoplay : {
            delay : 3000
        }
    })
})

let div = document.querySelectorAll('.content')
let liste = document.querySelectorAll('.tab')

liste.forEach((element) => {
    element.addEventListener('click',() => {
        liste.forEach((e) => {
            e.classList.remove('tab-active')
        })
        div.forEach((a) => {
            a.classList.remove('active')
        })
        element.classList.add('tab-active')

        if(element.classList.contains('tab-actualites')) {
            document.querySelector('.actualites').classList.add('active')
        }
        if(element.classList.contains('tab-affaires')) {
            document.querySelector('.affaires').classList.add('active')
        }
        if(element.classList.contains('tab-nouveau')) {
            document.querySelector('.nouveau').classList.add('active')
        }
    })

});