const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const container = document.querySelector('.js-palette')
const markup = createColorMarkup(colors)

function createColorMarkup(colors) {
    return colors.map(({hex, rgb}) => {
        return ` <div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
        </div>`
        }).join('')
}

container.insertAdjacentHTML('beforeend', markup)
container.addEventListener('click', onContainerClick)


// function onContainerClick(event) {
//   if (!event.target.classList.contains('color-swatch')) {
//     return
//   }
//   const currentActiveCard = document.querySelector('.is-active')


//   const closestCard = event.target.closest('.color-card')
//   closestCard.classList.add('is-active')
//   document.body.style.backgroundColor = event.target.dataset.hex

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active')
//   }
//   console.log(closestCard)
// }




//!-----------------поділено на окремі ф-ції
function onContainerClick(event) {
  if (!event.target.classList.contains('color-swatch')) {
    return
  }

  const closestCard = event.target.closest('.color-card')
  
    removeActiveClass()
    addActiveClass(closestCard)
    changeBgColor(event.target.dataset.hex)

}

function changeBgColor(color) {
    document.body.style.backgroundColor = color
}

function addActiveClass(card) {
  card.classList.add('is-active')
}

function removeActiveClass() {
      const currentActiveCard = document.querySelector('.is-active')

    if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
  }
}