/**
 * Ref: https://medium.com/coinmonks/design-patterns-in-javascript-made-easy-part-i-10334decb204
 */

interface ICloneable {
  clone();
}

export class Prototype2 implements ICloneable {
  identity: any;
  list: Array<number> = [];

  constructor(id?: any) {
    this.identity = id;

    for( let i = 0; i < 1000; i++) {
      this.list.push(i);
    }
  }

  clone(): Prototype2 {
    return Object.assign({}, this);
  }
}