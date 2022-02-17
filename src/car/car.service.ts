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

  public getCarById(id: number) {
    const car = this.findCar(id)[0];
    return car;
  }

  public deleteCarById(id: number) {
    const carIndex = this.findCar(id)[1];
    this.cars.splice(carIndex, 1);
    return this.cars;
  }

  public putCarById(id: number, propertyName: string, propertyValue: string) {
    /** "put" in this case means "update" */
    const [car, carIndex] = this.findCar(id);
    car[propertyName] = propertyValue;
    this.cars[carIndex] = car;
    return this.cars;
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
