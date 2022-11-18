import { Request, Response } from 'express';
import CarService from '../Services/Car.service';

export default class CarController {
  private carService: CarService;

  constructor() {
    this.carService = new CarService();
  }
  
  public create = async (req: Request, res: Response) => {
    const newCar = await this.carService.createNewCar(req.body);
    return res.status(201).json(newCar);
  }; 
}