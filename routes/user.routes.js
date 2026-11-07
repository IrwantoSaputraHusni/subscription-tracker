import { Router } from 'express' ; 

const userRouter = Router() ;

userRouter.get('/', (req, res) => res.send({ title: 'GET all users' }));

userRouter.get('/:id', (req, res) => res.send({ title: 'GET Users detail' }));

userRouter.post('/', (req, res) => res.send({ title: 'CREATE new user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE users' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE users' }));

export default userRouter;
