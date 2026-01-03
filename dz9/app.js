import express from 'express';
import sequelize from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Database ready');
  app.listen(3000, () => console.log('Server running on port 3000'));
});
