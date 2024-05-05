import User from '../models/User';
import { hashPassword, comparePasswords } from '../utils/passwordUtils';
import { generateToken } from '../utils/tokenUtils';

export const registerUser = async (username: string, email: string, password: string) => {
    try {
        const hashedPassword = await hashPassword(password);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Failed to register user');
    }
};

export const loginUser = async (email: string, password: string) => {
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        const token = generateToken(user);
        return token;
    } catch (error) {
        throw new Error('Failed to login');
    }
};
