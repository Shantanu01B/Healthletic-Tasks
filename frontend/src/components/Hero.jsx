import React from 'react';
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
          Elevate Your <span className="text-primary-600">Health</span> <br />
          Empower Your <span className="text-primary-600">Life</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Discover personalized wellness plans, high-quality supplements, and professional coaching to help you reach your peak performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/products" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-200">
            Explore Services <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="bg-white border-2 border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all text-slate-700">
            Contact Us
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
              <Activity />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Training</h3>
            <p className="text-slate-600">Custom workout modules designed for your specific goals and body type.</p>
          </div>
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold mb-3">Dietary Guidance</h3>
            <p className="text-slate-600">Nutritional roadmap to fuel your body with scientific precision.</p>
          </div>
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
              <HeartPulse />
            </div>
            <h3 className="text-xl font-bold mb-3">Recovery Hub</h3>
            <p className="text-slate-600">Advanced techniques and tools to ensure optimal muscle recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
