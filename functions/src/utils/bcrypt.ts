import bcrypt from 'bcryptjs';

export const comparePassword = async (password: string, hashedPassword: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (err: any) {
    throw new Error('Error comparing passwords');
  }
};

export const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (err: any) {
    throw new Error('Error hashing password');
  }
};
