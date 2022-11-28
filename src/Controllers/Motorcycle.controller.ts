import { Request, Response } from 'express';
import MotoService from '../Services/Motorcycle.service';
import CatchError from '../utils/CatchE';

export default class CarController {
  private motoService: MotoService;

  constructor() {
    this.motoService = new MotoService();
  }

  public create = async (req: Request, res: Response) => {
    const newMoto = await this.motoService.createNewMoto(req.body);
    return res.status(201).json(newMoto);
  };

  public findOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    try { 
      const idOfMotor = await this.motoService.findOne(id);
      if (!idOfMotor) {
        return res.status(404).json({ message: 'Motorcycle not found' });
      }
      return res.status(200).json(idOfMotor);
    } catch (err) {
      if (err instanceof CatchError) {
        return res.status(err.status).json({ message: err.message });
      }
    }
  };

  public findAll = async (_req: Request, res: Response) => {
    const motors = await this.motoService.findAll();
    return res.status(200).json(motors);
  };

  public updateForId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {  
      const idOfMotor = await this.motoService.findOne(id);
      if (!idOfMotor) return res.status(404).json({ message: 'Motorcycle not found' });

      const upMotorForId = await this.motoService.updateForId(id, body);
      return res.status(200).json(upMotorForId);
    } catch (err) {
      if (err instanceof CatchError) {
        return res.status(err.status).json({ message: err.message });
      }
    }
  };
}
