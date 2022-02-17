import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Post
  public postCar() {
  }

  @Get
  public getCatById() {
  }

  @Delete
  public deleteCarById() {
  }

  @Put
  public putCarById() {
  }
}
