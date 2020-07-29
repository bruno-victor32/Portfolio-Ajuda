const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')
for (let card of cards){//Para cada cartão de cartões
    const videoId = card.getAttribute("id");
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
    })
}
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modal.classList.remove("maximize")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector('#max-modal').addEventListener('click', function () {
   
    if(!modal.classList.contains('maximize')){
        modal.classList.add("maximize")
    } else {
        modal.classList.remove("maximize")
    }


})