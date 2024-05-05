import bcrypt from 'bcrypt';

/**
 * Hashes the given plain password using bcrypt.
 * @param {string} password - The plain password to hash.
 * @returns {Promise<string>} - A promise that resolves with the hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};

/**
 * Compares the given plain password with a hashed password using bcrypt.
 * @param {string} plainPassword - The plain password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating whether the passwords match.
 */
export const comparePasswords = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(plainPassword, hashedPassword);
};
