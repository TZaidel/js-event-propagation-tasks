const coordsOutput = document.querySelector('.js-coords')
let mouseMoveCounter = 0

window.addEventListener('mousemove', _.throttle(onMouseMove, 500))

function onMouseMove(event) {
    mouseMoveCounter += 1
    coordsOutput.textContent = `Count of onMouseMove: ${mouseMoveCounter}, x: ${event.clientX}, y: ${event.clientY}`
}



const input = document.querySelector('.js-input')
const output = document.querySelector('.js-output')
let inputInvocationCounter = 0

input.addEventListener('input', _.debounce(onInputChange, 500))

function onInputChange(event) {
    inputInvocationCounter += 1
    output.textContent = `Count of onInputChange: ${inputInvocationCounter}, Value: ${event.target.value}`
}