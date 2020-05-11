/**
 * https://blog.fullstacktraining.com/singleton-pattern-in-typescript/
 */

import {Singleton} from './singleton';

const myInstance = Singleton.getInstance();
console.log(myInstance.temperature = 100);
console.log(myInstance.increaseTemperature())
console.log(myInstance.increaseTemperature())
console.log(myInstance.decreaseTemperature())