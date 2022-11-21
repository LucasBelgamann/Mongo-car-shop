import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const router = Router();

router.post('/', (req, res) => new CarController().create(req, res));
router.get('/:id', (req, res) => new CarController().findOne(req, res));
router.get('/', (req, res) => new CarController().findAll(req, res));
router.put('/:id', (req, res) => new CarController().updateForId(req, res));

export default router;
