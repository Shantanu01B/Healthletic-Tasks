# Healthletic Lifestyle - Internship Modules

This repository contains specific modules developed for the Healthletic Lifestyle project during a Full Stack Web Development internship. The project is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Tech Stack
- **Frontend:** React.js (Vite), Tailwind CSS, React Router, React Hook Form, Zod, Axios, Lucide React.
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT Authentication, Bcrypt.js.

## Project Structure
```
Healthletic Tasks/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # API logic
│   ├── middleware/     # Auth & Error handling
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   ├── utils/          # JWT generation
│   ├── server.js       # Entry point
│   └── seed.js         # Sample data script
└── frontend/
    ├── src/
    │   ├── api/        # Axios configuration
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Application pages
    │   └── App.jsx     # Routing & Layout
    └── index.html
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas URI

### 1. Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```
4. Seed the database with sample data: `node seed.js`
5. Start the server: `npm start` (or `node server.js`)

### 2. Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the application at the URL provided by Vite (usually `http://localhost:5173`)

## Features Implemented
- **Homepage:** Premium responsive sections with Hero and Features.
- **Auth:** Professional Login/Signup pages with client-side validation (Zod) and JWT-based backend.
- **Services:** Product listing page with active search and category filtering.
- **Dashboard:** Interactive section showing user stats and recent activity.
- **Contact:** Functional contact form with submission API.

## Design Aesthetics
The UI follows a modern corporate SaaS aesthetic with:
- Glassmorphism effects
- Premium color palette (Sky Blue & Slate)
- Smooth micro-animations (Framer Motion)
- Responsive layouts for all devices
