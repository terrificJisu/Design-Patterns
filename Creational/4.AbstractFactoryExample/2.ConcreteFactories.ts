import { CarPart } from "./1.CarPart";

//Concrete Honda Factory derived from abstract CarPart
export class HondaFactory extends CarPart {
  getLeftDoor() {
    return new HondaLeftDoor();
  }

  getRightDoor() {
    return new HondaRightDoor();
  }
}

//Concrete Mazda Factory derived from abstract CarPart
export class MazdaFactory extends CarPart {
  getLeftDoor() {
    return new MazdaLeftDoor();
  }

  getRightDoor() {
    return new MazdaRightDoor();
  }
}

// Specifics products ( cell values of the table )
class HondaRightDoor {
  makePart() {
    return "Im Honda Right Door ";
  }
}

class HondaLeftDoor {
  makePart() {
    return "Im Honda Left Door";
  }
}

class MazdaRightDoor {
  makePart() {
    return "Im Mazda Right Door ";
  }
}

class MazdaLeftDoor {
  makePart() {
    return "Im Mazda Left Door";
  }
}
