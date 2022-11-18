import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

const carController = new CarController();

router.post('/', carController.create);
router.get('/:id', carController.findOne);

export default router;
