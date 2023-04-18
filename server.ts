import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
