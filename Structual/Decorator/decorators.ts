// Reference: https://www.youtube.com/watch?v=WPOLDEk1LF0

abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number

}

class ModelS extends Car {
  public description = 'Models S';

  public cost(): number {
    return 73000
  }
}

class ModelX extends Car {
  public description = 'Models X';

  public cost(): number {
    return 77000
  }
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract GetDescription(): string;
  public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car
  }

  public GetDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhanced AutoPilot'
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }

}

class RearFacingSeats extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car
  }

  public GetDescription(): string {
    return this.decoratedCar.getDescription() + ', Rear facing seats'
  }

  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }

}

const myTesla = new ModelS();
const myTeslaWithRearFacingSeats = new RearFacingSeats(myTesla);
const myTeslaWithEnhancedAutoPilot = new EnhancedAutoPilot(myTesla);

console.log(myTeslaWithRearFacingSeats.getDescription());
console.log(myTeslaWithEnhancedAutoPilot.getDescription());