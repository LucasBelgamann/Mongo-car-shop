import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

const carController = new CarController();

router.post('/', carController.create);
router.get('/:id', carController.findOne);
router.get('/', carController.findAll);

export default router;
