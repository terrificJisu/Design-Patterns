import { HondaFactory, MazdaFactory } from "./2.ConcreteFactories";

enum Car {
  HONDA,
  MAZDA,
}

export abstract class CarPart {
  static getFactory(key: Car) {
    const hondaFactory = new HondaFactory();
    const mazdaFactory = new MazdaFactory();

    switch (key) {
      case Car.HONDA:
        return hondaFactory;

      case Car.MAZDA:
        return mazdaFactory;

      default:
        return mazdaFactory;
    }
  }

  abstract getLeftDoor();
  abstract getRightDoor();
}
