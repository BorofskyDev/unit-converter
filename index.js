/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let numInput = document.getElementById('num-input')
const convertBtn = document.getElementById('convert-btn')
const length = document.getElementById('length')
const volume = document.getElementById('volume')
const mass = document.getElementById('mass')



convertBtn.addEventListener('click', function () {
    renderUnits()
    numInput.value = ''

})

function renderUnits() {
    let userInput = numInput.value
    let lengthM = userInput * 3.281
    let lengthF = userInput / 3.281
    length.innerHTML = `
        <h3>Length (Meters/Feet)</h3>
        <p>${userInput} meters = ${lengthM.toFixed(3)} feet | ${userInput} feet = ${lengthF.toFixed(3)} meters</p>
    `

    let volumeM = userInput * 0.264
    let volumeF = userInput / 0.264
    volume.innerHTML = `
        <h3>Volume (Liters/Gallons</h3>
        <p>${userInput} liters = ${volumeM.toFixed(3)} gallons | ${userInput} gallons = ${volumeF.toFixed(3)} liters</p>
    `

    let massM = userInput * 2.204
    let massF = userInput / 2.204
    mass.innerHTML = `
        <h3>Mass (Kilograms/Pounds)</h3>
		<p>${userInput} kilos = ${massM.toFixed(3)} pounds | ${userInput} pounds = ${massF.toFixed(3)} kilos</p>
    `

}