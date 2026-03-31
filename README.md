# Healthletic Lifestyle - Internship Modules

This repository contains specific modules developed for the Healthletic Lifestyle project during a Full Stack Web Development internship. The project is a comprehensive wellness platform built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js), featuring professional-grade modules for fitness tracking and lifestyle optimization.

---

## 🛠 Tech Stack
- **Frontend:** React.js (Vite), Tailwind CSS, Framer Motion, React Router, React Hook Form, Zod, Axios, Lucide React.
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, Bcrypt.js, Dotenv.

---

## 📂 Project Structure
```text
Healthletic Tasks/
├── backend/
│   ├── config/         # Database connection & shared configs
│   ├── controllers/    # Business logic for all modules
│   ├── middleware/     # Auth (JWT) & Global Error handling
│   ├── models/         # Mongoose schemas (User, Product, Service, Workout, DietPlan)
│   ├── routes/         # Express API endpoints
│   ├── utils/          # JWT generation & utilities
│   ├── server.js       # Main server entry point
│   └── seed.js         # Comprehensive sample data script
└── frontend/
    ├── src/
    │   ├── api/        # Axios configuration & interceptors
    │   ├── components/ # Reusable UI components (Navbar, Hero, Cards)
    │   ├── pages/      # Application-wide pages (Dashboard, DietPlans, Workouts, etc.)
    │   └── App.jsx     # Routing, Layout & Providers
    └── index.html      # Entry HTML file
```

---

## 🚦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or Atlas URI)

### 1. Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Configure environment variables in `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/healthletic
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```
4. Seed the database with sample data: `node seed.js`
5. Start the server: `npm start`

### 2. Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the application at `http://localhost:5173` (or the port provided by Vite).

---

## ✨ Features Implemented

### 🏋️ Fitness & Wellness Modules
- **Services Hub**: A professional showcase of wellness offerings with pricing and feature lists.
- **Home Workouts**: Interactive exercise libraries with difficulty filters, durations, and step-by-step guides.
- **Diet Protocols**: Goal-oriented nutritional plans with calorie targets and structured meal schedules.

### 🛡 Core Functionality
- **Homepage**: Premium responsive sections featuring a Hero banner and key service highlights.
- **Auth System**: Professional Login/Signup with Zod validation and secure JWT-based backend.
- **Shop & Products**: Product listing page with real-time search and category-based filtering.
- **User Dashboard**: Centralized hub showing user stats, activity highlights, and quick-access cards.
- **Contact Center**: Functional contact form with API integration for seamless user communication.

---

## 🎨 Design Aesthetics
The UI follows a **Modern Corporate SaaS** aesthetic with:
- **Glassmorphism**: Subtle translucent effects for a premium feel.
- **Curated Palette**: A harmonious blend of Sky Blue and deep Slates.
- **Micro-Animations**: Smooth interactions and transitions using Framer Motion.
- **Responsive-First**: Fully optimized layout for mobile, tablet, and desktop viewports.

---

## 📝 License
Developed as part of the Healthletic Lifestyle Internship. All rights reserved &copy; 2026.
