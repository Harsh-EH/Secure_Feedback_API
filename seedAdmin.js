// seedAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

// Load env vars
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const existing = await Admin.findOne({ username: 'admin' });
    if (existing) {
      console.log('Admin already exists.');
    } else {
      const admin = new Admin({
        username: 'admin',
        password: 'admin123', // This will be hashed automatically
      });

      await admin.save();
      console.log('Admin user created.');
    }
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });
