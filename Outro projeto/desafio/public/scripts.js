
const modalOverlay = document.querySelector('.modal-overlay ')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
    card.addEventListener("click", function(){
        const course = card.getAttribute('id')
        modalOverlay.classList.add("active")
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${course}`
    })
}

document.querySelector("#close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modal.classList.remove("minimize")
    modal.classList.remove("maximize")

    modalOverlay.querySelector('iframe').src = ""
});

document.querySelector("#min-modal").addEventListener('click', function () {
   
    if(!modal.classList.contains('minimize')){
        modal.classList.add("minimize")
    } else {
        modal.classList.remove("minimize")
 

    }

})



document.querySelector("#max-modal").addEventListener('click', function () {
   
    if(!modal.classList.contains('maximize')){
        modal.classList.add("maximize")
    } else {
        modal.classList.remove("maximize")
    }

})
