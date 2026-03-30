const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@healthletic.com',
    password: 'password123',
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
];

const products = [
  {
    name: 'Omega-3 Peak Performance',
    image: '/images/omega3.jpg',
    description: 'High-purity fish oil for cognitive health and muscle recovery.',
    brand: 'Healthletic Labs',
    category: 'Supplements',
    price: 49.99,
    countInStock: 50,
    rating: 4.8,
    numReviews: 124,
  },
  {
    name: 'Pro-Athlete Coaching Plan',
    image: '/images/coaching.jpg',
    description: 'One-on-one virtual coaching with elite national trainers.',
    brand: 'Healthletic Elite',
    category: 'Coaching',
    price: 199.99,
    countInStock: 10,
    rating: 5.0,
    numReviews: 45,
  },
  {
    name: 'Smart Training Vest',
    image: '/images/vest.jpg',
    description: 'Weighted vest with integrated biometric sensors.',
    brand: 'Healthletic Gear',
    category: 'Equipment',
    price: 129.50,
    countInStock: 25,
    rating: 4.5,
    numReviews: 89,
  },
  {
    name: 'Recover Pro Protein',
    image: '/images/protein.jpg',
    description: 'Hydrolyzed whey protein with added BCAAs for rapid growth.',
    brand: 'Healthletic Labs',
    category: 'Supplements',
    price: 64.00,
    countInStock: 30,
    rating: 4.7,
    numReviews: 210,
  },
  {
    name: 'Tech-Fit Compression Tee',
    image: '/images/tee.jpg',
    description: 'Moisture-wicking fabric with muscle-mapping support.',
    brand: 'Healthletic Gear',
    category: 'Apparel',
    price: 39.99,
    countInStock: 100,
    rating: 4.6,
    numReviews: 156,
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
