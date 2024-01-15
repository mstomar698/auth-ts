import express, { Request, Response } from 'express';
import { isAuth } from '../utils';
import Code from '../models/codeModel';

const codeRouter = express.Router();

codeRouter.post('/all', isAuth, async (req: Request, res: Response) => {
    const user = req.body.userInfo;
    const userId = user._id;
    console.log(userId);
    const code = await Code.find({ userId });
    res.send(code);
});

codeRouter.post('/', isAuth, async (req: Request, res: Response) => {
  const code = req.body.code;
  const lang = req.body.lang;
  const stdin = req.body.stdin;
  const result = req.body.result;
  const user = req.body.userInfo;
  const userId = user._id;
    const codeObj = {
        code,
        lang,
        stdin,
        result,
        userId,
    };
    const newCode = new Code(codeObj);
    const savedCode = await newCode.save();
    if (savedCode) {
        res.send({
            _id: savedCode.id,
            message: "Code Saved"
        });
    } else {
        res.status(401).send({ message: 'Invalid Code Data.' });
    }
});

codeRouter.get('/:id', isAuth, async (req: Request, res: Response) => {
  const code = await Code.findById(req.params.id);
  if (code) {
    res.send(code);
  } else {
    res.status(404).send({ message: 'No Code Not Found' });
  }
});

codeRouter.delete('/:id', isAuth, async (req: Request, res: Response) => {
  const code = await Code.findById(req.params.id);
  if (code) {
    await Code.deleteOne({ _id: req.params.id });
    res.send({ message: 'Code Deleted' });
  } else {
    res.status(404).send({ message: 'No Code Found' });
  }
});

export default codeRouter;
