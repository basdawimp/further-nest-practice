import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public getCars() {
    return this.cars;
  }

  public postCar(car) {
    return this.cars.push(car);
  }

  public getCarById(id) {
    return;
  }

  public deleteCarById(id) {
    return;
  }

  public putCarById(id) {
    /** "put" in this case means "update" */
    return;
  }
}
