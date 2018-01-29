class Person {
  constructor (name, originFloor, destinationFloor) {
    this.name = name
    this.originFloor = originFloor
    this.destinationFloor = destinationFloor
  }
}

module.exports = Person

let test = new Person('David', 3, 6)

let waitingList = []

let passengers = []

let requests = []

console.log(test.name)
