const fs = require('fs')
let input = fs.readFileSync('input.txt', 'utf8')

// Part 1
let sum = input
    .split('\n')
    .map(Number)
    .map(mass => Math.floor(mass / 3) - 2)
    .reduce((a, b) => a + b)

console.log(sum)

// Part 2
const getFuel = mass => {
    let fuel = Math.max(0, Math.floor(mass / 3) - 2)
    if (fuel) fuel += getFuel(fuel)
    return fuel
}

sum = input
    .split('\n')
    .map(Number)
    .map(getFuel)
    .reduce((a, b) => a + b)

console.log(sum)
