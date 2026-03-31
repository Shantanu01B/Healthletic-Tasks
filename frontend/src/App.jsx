import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductListing from './pages/ProductListing';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Services from './pages/Services';
import HomeWorkout from './pages/HomeWorkout';
import DietPlans from './pages/DietPlans';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/home-workout" element={<HomeWorkout />} />
            <Route path="/diet-plans" element={<DietPlans />} />
          </Routes>
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2026 Healthletic Lifestyle. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
