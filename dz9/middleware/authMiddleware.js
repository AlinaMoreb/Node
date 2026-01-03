import User from '../models/User.js';

export default async (req, res, next) => {
  const userId = req.headers.userid;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  if (user.mustChangePassword) {
    return res.status(403).json({ message: 'Password change required' });
  }

  req.user = user;
  next();
};
