const openModalButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-button');
console.log("🚀 ~ closeModalButton:", closeModalButton)

openModalButton.addEventListener('click', () => {
    modal.showModal();
})

closeModalButton.addEventListener('click', () => {
    modal.close();
})
