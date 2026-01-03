import bcrypt from 'bcrypt';
import User from '../models/User.js';

// POST /register
export const register = async (req, res) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ where: { email } });
  if (exists) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  res.json({ message: 'User registered', user });
};

// POST /change-password
export const changePassword = async (req, res) => {
  const { newPassword } = req.body;

  const hashed = await bcrypt.hash(newPassword, 10);
  req.user.password = hashed;
  req.user.mustChangePassword = false;

  await req.user.save();
  res.json({ message: 'Password changed' });
};

// POST /delete-account
export const deleteAccount = async (req, res) => {
  const { password } = req.body;

  const match = await bcrypt.compare(password, req.user.password);
  if (!match) {
    return res.status(400).json({ message: 'Wrong password' });
  }

  await req.user.destroy();
  res.json({ message: 'Account deleted' });
};

// POST /change-email
export const changeEmail = async (req, res) => {
  const { newEmail, password } = req.body;

  const match = await bcrypt.compare(password, req.user.password);
  if (!match) {
    return res.status(400).json({ message: 'Wrong password' });
  }

  const exists = await User.findOne({ where: { email: newEmail } });
  if (exists) {
    return res.status(400).json({ message: 'Email already in use' });
  }

  req.user.email = newEmail;
  await req.user.save();

  res.json({ message: 'Email updated' });
};
