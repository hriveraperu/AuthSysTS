import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    // Add other properties as needed
}

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // Define other properties and methods
});

export default mongoose.model<IUser>('User', userSchema);
