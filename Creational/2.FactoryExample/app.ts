/**
 * Ref: https://blog.fullstacktraining.com/factory-pattern-in-typescript/
 */
import * as heroFactory from './herofactory';

const spiderman = heroFactory.createHero('Peter', 100);
spiderman.introduce(); // Hello, I am Peter. Pleasure to meet you.

const superman = heroFactory.createHero('Clark', 100);
superman.introduce(); // Hello, I am Clark. Pleasure to meet you.

// app.ts
import { SuperHeroFactory } from './superherofactory';

const superheroFactory = new SuperHeroFactory();
const batman = superheroFactory.createSuperHero({name: 'Batman', type: "hero"});
const joker = superheroFactory.createSuperHero({name: 'Joker', health: 50, type: "villain"});

batman.attacked(40); // Hero attacked: 40 -- 60
joker.attacked(40); // Villain attacked: 40 -- 10
joker.rampage(); // Joker restored health to 90