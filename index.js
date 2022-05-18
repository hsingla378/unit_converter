let num = parseInt(prompt("Enter the Number:"))
// let num = 20
let meterToFeet = (num * 3.28084).toFixed(3)
let feetToMeters = (num * 0.3048).toFixed(3)
let litersToGallons = (num * 0.264172).toFixed(3)
let gallonsToLiters = (num * 3.78541).toFixed(3)
let kilosToPounds = (num *  2.20462).toFixed(3)
let poundsToKilos = (num * 0.453592).toFixed(3)


console.log(meterToFeet)

function returnNum(){
    document.getElementById("heroValue").textContent = `${num}`
    document.getElementById("length").textContent = `${num} meters = ${meterToFeet} feet | ${num} feet = ${feetToMeters} meters`
    document.getElementById("volume").textContent = `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`
    document.getElementById("mass").textContent = `${num} kilos = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`

}
setInterval(function(){ returnNum();}, 0)

