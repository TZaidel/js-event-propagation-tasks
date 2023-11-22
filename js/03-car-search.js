const cars = [
  {
    id: 1,
    car: "Volvo",
    type: "XC60",
    price: 13000,
    img: "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my25/xc60-fuel/specifications/xc60-my24-og.jpg?h=630&iar=0&w=1200"
  },
    {
    id: 2,
    car: "Fiat",
    type: "Abarth",
    price: 15000,
    img: "https://www.abarth.pl/content/dam/abarth/gamma/my22/595/performance/Abarth-595-Koni-Rear-suspension_TB-720x520.jpg"
  },
      {
    id: 3,
    car: "Audi",
    type: "R8",
    price: 22000,
    img: "https://a.allegroimg.com/original/119134/27d3af624604af1981533243d45b/Audi-R8-Performance-Quattro-Gwarancja-05-2024"
  },
        {
    id: 4,
    car: "Dodge",
    type: "Challenger",
    price: 22000,
    img: "https://a.allegroimg.com/original/111abb/96e9d82f41548f1ca7fbeb55fac2"
  },
          {
    id: 5,
    car: "Cupra",
    type: "Formentor",
    price: 10000,
    img: "https://autostore.pl/images/page_images/foto_main/930/autostrore-cupra-formentor-01.jpg"
  },
            {
    id: 6,
    car: "Suzuki",
    type: "Jimny",
    price: 10000,
    img: "https://suzuki.pl/assets/img/auto/jimny_n1_2021/001.jpg"
  },
]



const form = document.querySelector('.js-form')
const carName = document.querySelector('.car-input')
const list = document.querySelector('.js-list')

function makeCarList(car) {
  return car.map(({ id, car, type, price, img }) => {
    return `<li > <img style = "width: 300px" src= "${img}"> <h2>${car}</h2><h3>${type}</h3><p>
    ${price}</p></li>`
  }).join('')
}

list.innerHTML = makeCarList(cars)


form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault() 
  console.log(event.currentTarget.elements)
  console.log(event.target.elements)
  console.log(event.target.elements.options)
console.log(event.target.elements.query)

 const result = cars.filter(car=> car[event.target.elements.options.value].toLowerCase().includes(event.target.elements.query.value.toLowerCase()))
  
  list.innerHTML = makeCarList(result)
}