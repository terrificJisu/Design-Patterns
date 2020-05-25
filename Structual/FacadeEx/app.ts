// reference: https://blog.fullstacktraining.com/facade-pattern-in-typescript/
import { Facade } from './facade';

const facade: Facade = new Facade(200001);
facade.buyPlayer();