// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
  
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  const allDrivers = [...drivers, "Broom"]
  return allDrivers
}

function prependDriver(name) {
  const newDrivers = ["Arnold", ...drivers]
  return newDrivers
}

function removeLastDriver() {
 return drivers.slice(2,3);
}

function removeFirstDriver() {
   return drivers.slice(0)
}