import express from 'express';
import carRoutes from './routes/carRoutes';

const app = express();

app.use(express.json());
// Bom dia, Boa tarde, Boa noite,
app.use('/cars', carRoutes);

export default app;
