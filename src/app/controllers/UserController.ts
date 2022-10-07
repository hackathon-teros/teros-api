import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
    async store(req: Request, res: Response) {
        const user = await User.create({
            email: 'admin@gmail.com.br',
            password: 'admin'
        });

        return res.status(201).json(user);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(user.password === password) {
            return res.status(200).json({ user, token: 'eu amo o orlando' });
        }

        return res.status(400);
    }
}

export default new UserController();
