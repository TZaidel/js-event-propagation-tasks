//*1----select only 1 tag
// const list = document.querySelector('.js-tags')
// list.addEventListener('click', onClick)

// function onClick(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return
//     }
//     const currentActiveBtn = document.querySelector('.tags__btn--active')
    
//     // if (currentActiveBtn) {
//     //         currentActiveBtn.classList.remove('tags__btn--active')
//     // }

//     currentActiveBtn?.classList.remove('tags__btn--active')

//     event.target.classList.add('tags__btn--active')
//     console.log(event.target.dataset.value)
// }


//!--RETURN-----select more tags
// const list = document.querySelector('.js-tags')
// const selectedBtn = new Set()
// list.addEventListener('click', onClick)

// function onClick(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return
//     }


//     const btn = event.target
//     if (btn.classList.contains('tags__btn--active')) {
//         selectedBtn.delete(btn.dataset.value)
//     } else {
//             selectedBtn.add(btn.dataset.value)
//     }

//     btn.classList.toggle('tags__btn--active')
  
//     console.log(selectedBtn)
// }

const list = document.querySelector('.js-tags')

list.addEventListener('click', onClick)
const selectedTags = new Set()
function onClick(event) {
    if (event.target.nodeName !== "BUTTON"){
        return
    }
    
    if (event.target.classList.contains('tags__btn--active')) {
        selectedTags.delete(event.target.dataset.value)
    } else {
            selectedTags.add(event.target.dataset.value)

    }
    event.target.classList.toggle('tags__btn--active')

    console.log(selectedTags)

}