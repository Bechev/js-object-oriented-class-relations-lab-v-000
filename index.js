let store = {drivers: [], trips: []}

let driverId = 0;
class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
}

class Passenger{
  constructor(name){
    this.name = name
  }
}
