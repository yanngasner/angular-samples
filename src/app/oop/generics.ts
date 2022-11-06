//Les generics permettent de factoriser des comportements en ayant des spécificités de type
//Chaque type va générer une implémentation spécifique
//Il est possible de créer des génériques avec plusieurs types (Generic<T, U, V), ainsi que de spécifier les types (contrats, contraintes)

import { BikeV2, CarV2, IVehicle, SharedCarV2 } from './interfaces';

export enum VehicleType {
  SharedCar = 'SharedCar',
  Car = 'Car',
  Bike = 'Bike',
}

export interface IVehicleFactory {
  buildVehicle: (vehicleType: VehicleType) => IVehicle;
}

export class VehicleFactory implements IVehicleFactory {
  private registry = new Map<VehicleType, number>();

  buildVehicle = (vehicleType: VehicleType) => {
    this.registry.set(vehicleType, (this.registry.get(vehicleType) ?? 0) + 1);
    switch (vehicleType) {
      case VehicleType.SharedCar:
        return new SharedCarV2();
      case VehicleType.Car:
        return new CarV2();
      case VehicleType.Bike:
        return new BikeV2();
    }
  };

  printRegistry = () => {
    for (let [key, value] of this.registry) {
      console.log(`Registry entry : ${key} - ${value} vehicle(s)`);
    }
  };
}

export class GenericVehicleFactory<T extends IVehicle>
  implements IVehicleFactory
{
  newFunc: () => T;
  private vehicleType: VehicleType;
  private vehicleCount = 0;

  constructor(newFunc: () => T, vehicleType: VehicleType) {
    this.newFunc = newFunc;
    this.vehicleType = vehicleType;
  }
  buildVehicle = () => {
    this.vehicleCount == 1;
    return this.newFunc();
  };

  printRegistry() {
    console.log(
      `Registry entry : ${this.vehicleType} - ${this.vehicleCount} vehicle(s)`
    );
  }
}
