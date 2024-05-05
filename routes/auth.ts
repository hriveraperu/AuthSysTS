import express, { Request, Response } from 'express'; // Import Request and Response types
import { registerUser, loginUser } from '../controllers/authController';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => { // Add type annotations for req and res
    const { username, email, password } = req.body;
    try {
        const user = await registerUser(username, email, password);
        res.status(201).json(user);
    } catch (error: any) { // Explicitly type error as 'any'
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req: Request, res: Response) => { // Add type annotations for req and res
    const { email, password } = req.body;
    try {
        const token = await loginUser(email, password);
        res.status(200).json({ token });
    } catch (error: any) { // Explicitly type error as 'any'
        res.status(401).json({ error: error.message });
    }
});

export default router;

