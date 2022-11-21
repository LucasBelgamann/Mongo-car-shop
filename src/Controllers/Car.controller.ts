import { Request, Response } from 'express';
import CarService from '../Services/Car.service';
import CatchError from '../utils/CatchE';

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
    const { id } = req.params;
    try { 
      const idOfCar = await this.carService.findOne(id);
      if (!idOfCar) {
        return res.status(404).json({ message: 'Car not found' });
      }
      return res.status(200).json(idOfCar);
    } catch (err) {
      if (err instanceof CatchError) {
        return res.status(err.status).json({ message: err.message });
      }
    }
  };

  public findAll = async (_req: Request, res: Response) => {
    const cars = await this.carService.findAll();
    return res.status(200).json(cars);
  };

  public updateForId = async (req: Request, res: Response) => {
    const { id } = req.params;
    try { 
      const upCarForId = await this.carService.updateForId(id, req.body);
      if (!upCarForId) return res.status(404).json({ message: 'Car not found' });
      return res.status(200).json(upCarForId);
    } catch (err) {
      if (err instanceof CatchError) {
        return res.status(err.status).json({ message: err.message });
      }
    }
  };
}
