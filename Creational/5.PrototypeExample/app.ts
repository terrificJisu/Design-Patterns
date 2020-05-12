import {Prototype2} from './example1'

const prototype2 = new Prototype2(1);
const prototype2Cloned = prototype2.clone();

console.log(prototype2.list[10] === prototype2Cloned.list[10] ); //true
console.log(prototype2.identity === prototype2Cloned.identity); //true