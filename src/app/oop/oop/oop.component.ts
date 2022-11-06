import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bike, Car, Vehicle } from '../inheritance';
import { SharedCar } from '../composition';
import { CarV2, IShareable, SharedBook, SharedCarV2 } from '../interfaces';
import {
  GenericVehicleFactory,
  VehicleFactory,
  VehicleType,
} from '../generics';
import { share } from 'rxjs';

@Component({
  selector: 'app-oop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oop.component.html',
  styleUrls: ['./oop.component.scss'],
})
export class OopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // inheritance

  tryCar() {
    var car = new Car();
    car.ride();
  }

  tryBike() {
    var bike = new Bike();
    bike.ride();
  }

  tryCarAndBike() {
    var vehicles: Vehicle[] = [];
    vehicles.push(new Car());
    vehicles.push(new Bike());
    vehicles.forEach((v) => v.ride());
  }

  trySharedCar() {
    var sharedCar = new SharedCar();
    sharedCar.rent('Marvin');
    sharedCar.ride();
    sharedCar.rent('Gabriel');
  }

  trySharedCarV2() {
    var sharedCar = new SharedCarV2();
    sharedCar.rent('Marvin');
    sharedCar.ride();
    sharedCar.rent('Gabriel');
  }

  trySharedObjects() {
    var shareable: IShareable[] = [];
    shareable.push(new SharedCarV2());
    shareable.push(new SharedBook());
    shareable.forEach((s) => s.rent('Yann'));
  }

  tryVehiclesFactory() {
    var factory = new VehicleFactory();
    var sharedCar = factory.buildVehicle(VehicleType.SharedCar);
    sharedCar.ride();
    //cannot use vehicle 1 as a shared vehicle nor handbrake vehicle
    var bike1 = factory.buildVehicle(VehicleType.Bike);
    var bike2 = factory.buildVehicle(VehicleType.Bike);
    factory.printRegistry();
    bike1.ride();
    bike1.ride();
  }

  tryGenericVehiclesFactory() {
    var carFactory = new GenericVehicleFactory<CarV2>(
      () => new CarV2(),
      VehicleType.Car
    );
    var car1 = carFactory.buildVehicle();
    car1.ride();
    car1.handbrake();
    var car2 = carFactory.buildVehicle();
    carFactory.printRegistry();
    var sharedCarFactory = new GenericVehicleFactory<SharedCarV2>(
      () => new SharedCarV2(),
      VehicleType.SharedCar
    );
    var sharedCar = sharedCarFactory.buildVehicle();
    sharedCar.rent('Eric');
    sharedCarFactory.printRegistry();
  }
}
