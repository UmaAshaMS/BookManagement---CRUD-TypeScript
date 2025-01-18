import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/routes';
import { ResponseModel } from './models/ResponseModels';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Library Management System');
});

app.use('/books', bookRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json(new ResponseModel(false, 'Internal Server Error', null));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
