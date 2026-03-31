import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DietPlans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDietPlans = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/diet-plans');
        setPlans(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching diet plans:', error);
        setLoading(false);
      }
    };
    fetchDietPlans();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Diet <span className="text-primary-600">Plans</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Scientifically crafted nutritional protocols for peak physical evolution.
          </p>
          <div className="mt-4 w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {plan.goal}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2">{plan.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/70 font-bold uppercase tracking-widest leading-none mb-1">Daily Target</p>
                    <p className="text-3xl font-black text-white leading-none">{plan.calories} <span className="text-xs font-medium uppercase font-sans">kcal</span></p>
                  </div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <p className="text-slate-600 leading-relaxed mb-10 pb-8 border-b border-dashed border-slate-200">
                  {plan.description}
                </p>
                
                <div className="space-y-8 flex-grow">
                  {plan.meals.map((meal, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-600 font-black text-lg">0{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">{meal.mealType}</h4>
                        <p className="text-slate-600 leading-relaxed">{meal.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-12 w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-primary-600 transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-slate-200">
                  Purchase Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietPlans;
