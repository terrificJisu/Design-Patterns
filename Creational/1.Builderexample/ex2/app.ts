/**
 * Ref: https://medium.com/@itayelgazar/the-builder-pattern-in-node-js-typescript-4b81a70b2ea5
 */
import { HouseBuilder } from './house-builder';

const myHouse = new HouseBuilder('Adder')
 .setFloor(5)
 .makeGarden()
 .makeParking()
 .build();

