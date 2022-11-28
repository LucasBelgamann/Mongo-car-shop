import { Router } from 'express';
import MotorController from '../Controllers/Motorcycle.controller';

const router = Router();

router.post('/', (req, res) => new MotorController().create(req, res));
router.get('/:id', (req, res) => new MotorController().findOne(req, res));
router.get('/', (req, res) => new MotorController().findAll(req, res));
// router.get('/:id', (req, res) => new MotorController().updateForId(req, res));

export default router;