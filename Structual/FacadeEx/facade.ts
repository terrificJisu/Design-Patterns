// facade.ts
import { Contract } from './subsystem1';
import { TeamFunds } from './subsystem2';

export class Facade {
  private contract: Contract = new Contract(new Date(new Date().setDate(new Date().getDate() + 10)));
  private funds: TeamFunds = new TeamFunds(200000);

  private playerContract: Date;
  private playerPrice: number;

  constructor(playerPrice: number) {
    this.playerContract = new Date();
    this.playerPrice = playerPrice;
  }

  buyPlayer(): void {
    if (this.contract.checkActiveContract(this.playerContract)) {
      console.log('Player has active contract');
    } else {
      console.log('Player has no active contract');
      if (!this.funds.checkFunds(this.playerPrice)) {
        console.log('Player is too expensive to buy.');
      } else {
        console.log('Player can be bought.');
      }
    }
  }
}