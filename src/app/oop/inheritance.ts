//L'héritage permet de factoriser du code en extrayant une base commune
//La classe de base peut également être utilisé en tant que type commun (paramètres, tableaux...)
//On ne peut hériter que d'une seule
//Une classe abstraite n'est pas instantiable directement

export abstract class Vehicle {
  speed: number = 0;
  private accelaration: number;
  accelarate = () => (this.speed += this.accelaration);
  break = () => (this.speed -= this.accelaration);

  ride() {
    console.log(`Vehicle is created, speed is ${this.speed}`);
    this.accelarate();
    this.accelarate();
    console.log(`After 2 accelerations, speed is ${this.speed}`);
  }

  constructor(accelaration: number) {
    this.accelaration = accelaration;
  }
}

export class Car extends Vehicle {
  constructor() {
    super(5);
  }

  handbrake = () => (this.speed = 0);

  override ride() {
    super.ride();
    this.handbrake();
    console.log(`After handbrake, speed is ${this.speed}`);
  }
}

export class Bike extends Vehicle {
  constructor() {
    super(1);
  }
}

export abstract class Shared {
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

//export abstract class SharedVehicle extends Vehicle, Shared {}
//export class SharedCar extends Shared, Car {}
