import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

const carController = new CarController();

router.post('/', carController.create);

export default router;
