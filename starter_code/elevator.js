class Elevator {
  constructor () {
    this.floor = 0
    this.MAXFLOOR = 10
    this.requests = []
    this.direction = 'up'
    this.timeoutId = this.timeoutId
  }

  start () {
    this.timeoutId = setInterval(() => this.floorUp, 1000)
  }
  stop () {
    clearInterval(this.start())
  }
  update () {
    this.log()
  }
  _passengersEnter () { }
  _passengersLeave () { }
  floorUp () {
    if (this.floor < this.MAXFLOOR) {
      return this.floor++
    }
  }
  floorDown () {
    if (this.floor < 0) {
      return this.floor--
    }
  }
  call () {

  }
  log () {
    console.log(` Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator

let elevator = new Elevator()

elevator.start()
elevator.log()
