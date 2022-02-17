import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public getCars() {
    return this.cars;
  }

  public postCar(car) {
    return this.cars;
  }

  public getCarById(id) {
    return this.cars;
  }

  public deleteCarById(id) {
    return this.cars;
  }

  public putCarById(id) {
    /** "put" in this case means "update" */
    return this.cars;
  }
}
