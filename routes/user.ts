import express, { Request, Response } from 'express';
import { generateToken } from '../utils';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello, USER!');
});

export default userRouter;
