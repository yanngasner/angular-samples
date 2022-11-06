//La composition permet de pallier aux limites de l'héritage.
//Conceptuellement, on compose les comportements : la classe "a" un comportement et non "est" un type parent
//La composition scale à large échelle, l'héritage doit être utilisé pour les liens très forts uniquement.

import { Car } from './inheritance';

export class SharingManager {
  owner: string = '';
  rent = (customer: string) => {
    if (customer == '') {
      this.owner = customer;
      console.log(`Rent is over`);
      return false;
    }
    console.log(`Rent by ${customer}`);
    return true;
  };
}

export class SharedCar extends Car {
  private share: SharingManager = new SharingManager();
  rent = (customer: string) => this.share.rent(customer);
}
