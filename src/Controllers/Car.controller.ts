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

  public findOne = async (req: Request, res: Response) => {
    const regex = /^[a-f\d]{24}$/i;
    const idOfCar = await this.carService.findOne(req.params.id);
    if (!idOfCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    if (!regex.test(req.params.id)) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    return res.status(200).json(idOfCar);
  }; 
}