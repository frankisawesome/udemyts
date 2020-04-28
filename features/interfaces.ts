interface Intact {
  broken: boolean;
}

abstract class Vehicle {
  constructor(public name: string, public year: number) {}

  describe(): void {
    console.log(`This is a ${this.name} and it's made in ${this.year}`);
  }

  abstract drive(): void;
}

class Car extends Vehicle implements Intact {
  constructor(name: string, year: number, public broken: boolean) {
    super(name, year);
  }

  drive(): void {
    console.log('Vroom');
  }
}

const oldCivic = new Car('Civic', 2000, false);
const newCivic = new Car('Civic', 2010, true);

const cars = [oldCivic, newCivic];

cars.map((car: Car) => {
  if (!car.broken) {
    car.drive();
  }
});
