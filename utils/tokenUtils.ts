import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User'; // Updated import statement

export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

export const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
    return bcrypt.compare(plainPassword, hashedPassword);
};

export const generateToken = (user: IUser) => { // Adjusted type definition
    const payload = {
        userId: user._id,
        username: user.username,
        email: user.email,
    };
    const secret = process.env.JWT_SECRET || '';
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string) => {
    const secret = process.env.JWT_SECRET || '';
    return jwt.verify(token, secret);
};
