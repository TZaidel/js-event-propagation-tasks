// const hotelName = confirm("Are u sure?")
// if (!hotelName) {
//     const msg = prompt(" why don't?")
//     if (!msg) {
//     alert('select something')
// }
// }

// window.addEventListener('keydown', onKeydown)

// function onKeydown(event) {
//     if (event.code === 'Escape')
//         document.body.style.backgroundColor = 'red'
//     if (event.code.includes("Key")) {
//     document.body.style.backgroundColor = 'violet'
//     }

// }

//*1
// openBtn.addEventListener('click', onModalOpenBtnClick)
// overlay.addEventListener('click', onModalCloseBtnClick)
// closeBtn.addEventListener('click', onModalCloseBtnClick)

// function onModalOpenBtnClick(event) {
//     document.body.classList.add('open')
//     window.addEventListener('keydown', onEscape)
// }

// function onModalCloseBtnClick(event) {
//     document.body.classList.remove('open')
//         window.removeEventListener('keydown', onEscape)
// }

// function onEscape(event) {
//         if (event.code === "Escape") {
//           onModalCloseBtnClick()
//             console.log('press')
//     }
// }

//*2
// openBtn.addEventListener('click', toggleModal)
// closeBtn.addEventListener('click', toggleModal)
// overlay.addEventListener('click', toggleModal)
// window.addEventListener('keydown', onEscape)

// function toggleModal() {
//     document.body.classList.toggle('open')
// }

// function onEscape(event) {
//     if (document.body.classList.contains('open') && event.code === "Escape") {
//         document.body.classList.remove('open')
//     }
// }

/*    <div class="container">
      <h2>How much does it cost?</h2>
      <form action="#" id="form">
        <label for="price">Price</label>
        <input type="number" id="price" name="price" value="50"/>
        <label for="quantity">Amount <span id="amount-nr">2</span></label>
        <input type="range" id="quantity" min="1" max="50" />
      </form>
      <p id="total"></p>
    </div>*/

    
const container = document.querySelector('.container')
const form = document.getElementById('form')
const price = document.getElementById('price')
const amount = document.getElementById('amount-nr')
const quantity = document.getElementById('quantity')
const total = document.getElementById('total')
    
form.addEventListener('input', onInput)
amount.textContent=quantity.value

const data = {
    price:0,
    quantity: 0,
    calcTotalPrice() {
        return Number((this.price * this.quantity).toFixed(2))
    }
}
dataFill()
    displayTotal()


function onInput(event) {
    if (event.target === quantity) {
        amount.textContent = event.target.value
        console.log(quantity.value)
        quantity.setAttribute("value", event.target.value )
    }

    dataFill()
    displayTotal()
}

function dataFill() {
    data.price = price.value
    data.quantity = quantity.value
}

function displayTotal() {
    total.textContent = data.calcTotalPrice() + ' euro'

}