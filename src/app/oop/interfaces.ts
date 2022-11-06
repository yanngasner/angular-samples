//Une interface fournit un contrat qui est exposé à l'extérieur (client au sens large)
//Une interface permet également de manipuler les entités"en tant que" , comme pour les classes de base

import { SharingManager } from './composition';

export interface IShareable {
  rent: (customer: string) => void;
}

export interface IVehicle {
  accelarate: () => void;
  break: () => void;
  ride: () => void;
}

export interface IHandbrakeVehicle extends IVehicle {
  handbrake: () => void;
}

export class SpeedManager {
  speed: number = 0;
  private accelaration: number;
  accelarate = () => (this.speed += this.accelaration);
  break = () => (this.speed -= this.accelaration);

  constructor(accelaration: number) {
    this.accelaration = accelaration;
  }

  ride() {
    console.log(`Vehicle is created, speed is ${this.speed}`);
    this.accelarate();
    this.accelarate();
    console.log(`After 2 accelerations, speed is ${this.speed}`);
  }
}

export class HandbrakeSpeedManager extends SpeedManager {
  constructor(acceleration: number) {
    super(acceleration);
  }
  handbrake = () => (this.speed = 0);

  override ride() {
    super.ride();
    this.handbrake();
    console.log(`After handbrake, speed is ${this.speed}`);
  }
}

export class CarV2 implements IHandbrakeVehicle {
  protected speedManager = new HandbrakeSpeedManager(5);
  accelarate = () => this.speedManager.accelarate();
  break = () => this.speedManager.break();
  handbrake = () => this.speedManager.handbrake();
  ride = () => this.speedManager.ride();
}

export class SharedCarV2
  extends CarV2
  implements IHandbrakeVehicle, IShareable
{
  private sharingManager = new SharingManager();
  rent = (customer: string) => this.sharingManager.rent(customer);
}

export class BikeV2 implements IVehicle {
  private speedManager = new HandbrakeSpeedManager(1);
  accelarate = () => this.speedManager.accelarate();
  break = () => this.speedManager.break();
  ride = () => this.speedManager.ride();
}

export class SharedBook implements IShareable {
  private sharingManager = new SharingManager();
  rent = (customer: string) => this.sharingManager.rent(customer);
}
