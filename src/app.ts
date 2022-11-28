import express from 'express';
import carRoutes from './routes/carRoutes';
import motoRoutes from './routes/MotoRoutes';

const app = express();

app.use(express.json());
// Bom dia, Boa tarde, Boa noite,
app.use('/cars', carRoutes);
app.use('/motorcycles', motoRoutes);

export default app;
