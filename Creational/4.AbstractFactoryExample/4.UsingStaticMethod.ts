import { CarPart } from "./CarPartWithStaticMethod";

enum Car {
  HONDA,
  MAZDA,
}

let factory = CarPart.getFactory(Car.HONDA);
let rightdoor = factory.getRightDoor();

console.log(rightdoor.makePart());

factory = CarPart.getFactory(Car.MAZDA);
rightdoor = factory.getRightDoor();
let leftdoor = factory.getLeftDoor();

console.log(rightdoor.makePart());
console.log(leftdoor.makePart());
