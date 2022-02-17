import { Injectable } from '@nestjs/common';
import { CARS } from './cars.mock';

@Injectable()
export class CarService {
  private cars = CARS;
  public async getCars() {
    return this.cars;
  }

  public async postCar(car) {
    return this.cars;
  }

  public async getCarById(id) {
    return this.cars;
  }

  public async deleteCarById(id) {
    return this.cars;
  }

  public async putCarById(id) {
    return this.cars;
  }
}
