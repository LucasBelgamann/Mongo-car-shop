import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  public create = async (req: Request, res: Response) => {
    const car: ICar = { ...req.body };
    const newCar = await this.service.createNewCar(car);
    return res.status(201).json(newCar);
  }; 
}

export default CarController;