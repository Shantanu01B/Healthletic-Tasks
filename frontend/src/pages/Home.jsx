import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      
      {/* Featured Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Premium Modules</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider">Healthletic {i}</p>
                  <h4 className="font-bold">Wellness Protocol</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  Comprehensive approach to modern lifestyle challenges with data-driven insights.
                </p>
                <button className="text-primary-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  Learn More <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">10k+</p>
            <p className="text-primary-300 font-medium">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-primary-300 font-medium">Expert Coaches</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">95%</p>
            <p className="text-primary-300 font-medium">Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">24/7</p>
            <p className="text-primary-300 font-medium">Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
