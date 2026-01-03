import express from 'express';
import sequelize from './config/db.js';
import bookRoutes from './routes/book.routes.js';

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);

const PORT = 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.error('DB connection error:', err));
 

