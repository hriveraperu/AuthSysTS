import { Request, Response, NextFunction } from 'express';

export const validateRegistrationInput = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;
    // Perform validation checks
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    next();
};

export const validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    // Perform validation checks
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    next();
};
