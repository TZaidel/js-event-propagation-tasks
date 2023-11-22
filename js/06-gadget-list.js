
// window.addEventListener('keydown', changeColor)

// function changeColor() {
//     document.body.style.backgroundColor = getRandomHexColor()
// }


// function getRandomHexColor() {
//     const letters = '0123456789ABCDEF'
//     let color = '#'
//     for (let i = 0; i < 6; i++){
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }

const products = [
    {
      id: 1,
      img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
      name: "Монітор",
      price: 3000,
      description: "23-дюймовий монітор з Full HD роздільною здатністю.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
      name: "Ноутбук",
      price: 20000,
      description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
    },
    {
      id: 3,
      img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
      name: "Смартфон",
      price: 8000,
      description: "Оснащений потрійною камерою та багатоядерним процесором.",
    },
    {
      id: 4,
      img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
      name: "Планшет",
      price: 12000,
      description:
        "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
    },
];


const list = document.querySelector('.js-products')
function createProductList(el) {
    return  el.map(({ id, img, name, price, description }) => `<li id="${id}" class = "item"><img width = "200" src = "${img}"><h2>${name}</h2><h3>${price}$</h3></li>`).join('')
}

list.insertAdjacentHTML("beforeend", createProductList(products))

list.addEventListener('click', onClick)

function onClick(event) {
    if (event.target === event.currentTarget) {
        return
    }
    const currentProduct = event.target.closest('.item')
    const id = currentProduct.id
    const product = products.find(({ id: productId }) => productId === Number(id))
    console.log(product)

    
    const instance = basicLightbox.create(`<div class="modal">
    <img src = "${product.img}">
    <p>${product.description}</p></div>
`)

    instance.show()
    window.addEventListener('keydown', (event) => {
         if (event.code === "Escape") {
    instance.close()
    }
    })
    
}
