import { HttpException, Injectable } from '@nestjs/common';
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

  public getCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const car = this.findCar(carId)[0];
      return resolve(car);
    });
  }

  public deleteCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const carIndex = this.findCar(carId)[1];
      this.cars.splice(carIndex, 1);
      return resolve(this.cars);
    });
  }

  public putCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<any> {
    /** "put" in this case means "update" */
    const carId = Number(id);
    return new Promise((resolve) => {
      const [car, carIndex] = this.findCar(carId);
      car[propertyName] = propertyValue;
      this.cars[carIndex] = car;
      return resolve(this.cars[carIndex]);
    });
  }

  private findCar(id: number): [any, number] {
    const carIndex = this.cars.findIndex((car) => car.id === id);
    const car = this.cars[carIndex];
    if (!car) {
      throw new HttpException('No car found', 404);
    }
    return [car, carIndex];
  }
}
