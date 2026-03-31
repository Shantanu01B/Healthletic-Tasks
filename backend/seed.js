const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product');
const Service = require('./models/Service');
const Workout = require('./models/Workout');
const DietPlan = require('./models/DietPlan');

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
    image: 'https://images.unsplash.com/photo-1584017945513-177ff8364b9a?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1614928228253-dc09cb3b11ad?auto=format&fit=crop&q=80&w=800',
    description: 'Weighted vest with integrated biometric sensors.',
    brand: 'Healthletic Gear',
    category: 'Equipment',
    price: 129.50,
    countInStock: 25,
    rating: 4.5,
    numReviews: 89,
  },
];

const services = [
  {
    name: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'Dedicated one-on-one sessions tailored to your fitness goals.',
    category: 'Training',
    price: 75.0,
    duration: '60 mins',
    features: ['Custom Workout Plan', 'Form Correction', 'Monthly Progress Report'],
  },
  {
    name: 'Nutritional Consultation',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800',
    description: 'Expert advice on fueling your body for performance and health.',
    category: 'Nutrition',
    price: 120.0,
    duration: '45 mins',
    features: ['Meal Mapping', 'Supplement Guide', 'Metabolic Assessment'],
  },
  {
    name: 'Group Fitness Classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    description: 'High-energy team workouts to keep you motivated.',
    category: 'Training',
    price: 25.0,
    duration: '50 mins',
    features: ['HIIT Focused', 'Community Atmosphere', 'All Levels Welcome'],
  },
];

const workouts = [
  {
    title: 'Full Body Ignition',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    description: 'A comprehensive routine to activate every major muscle group.',
    difficulty: 'Intermediate',
    duration: '45 mins',
    exercises: [
      { name: 'Burpees', reps: '3 sets of 15' },
      { name: 'Push-ups', reps: '3 sets of 20' },
      { name: 'Squats', reps: '4 sets of 15' },
    ],
  },
  {
    title: 'Morning Flow Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    description: 'Gentle stretches and poses to start your day with clarity.',
    difficulty: 'Beginner',
    duration: '30 mins',
    exercises: [
      { name: 'Sun Salutation', reps: '5 rounds' },
      { name: 'Down Dog', reps: '2 mins' },
      { name: 'Warrior I', reps: '1 min per side' },
    ],
  },
];

const dietPlans = [
  {
    name: 'Lean Muscle Protocol',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    description: 'High protein fueling strategy for muscle growth and recovery.',
    goal: 'Muscle Gain',
    calories: 2800,
    meals: [
      { mealType: 'Breakfast', description: 'Oatmeal with whey protein and berries' },
      { mealType: 'Lunch', description: 'Grilled chicken breast with quinoa and broccoli' },
      { mealType: 'Dinner', description: 'Salmon fillet with sweet potato and spinach' },
    ],
  },
  {
    name: 'Metabolic Reset',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    description: 'Clean eating focus to optimize metabolic health and fat loss.',
    goal: 'Weight Loss',
    calories: 1800,
    meals: [
      { mealType: 'Breakfast', description: 'Avocado toast with poached eggs' },
      { mealType: 'Lunch', description: 'Mixed greens salad with chickpeas and lemon tahini' },
      { mealType: 'Dinner', description: 'Stir-fry tofu with lots of colorful vegetables' },
    ],
  },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();
    await Product.deleteMany();
    await Service.deleteMany();
    await Workout.deleteMany();
    await DietPlan.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    await Service.insertMany(services);
    await Workout.insertMany(workouts);
    await DietPlan.insertMany(dietPlans);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
