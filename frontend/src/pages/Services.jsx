import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/services');
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };
    fetchServices();
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
            Our Premium <span className="text-primary-600">Services</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Professional wellness solutions designed to help you peak in every aspect of life.
          </p>
          <div className="mt-4 w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service._id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{service.name}</h3>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Starting at</p>
                    <p className="text-2xl font-black text-slate-900">${service.price}</p>
                  </div>
                  <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary-600 transition-colors duration-300 shadow-lg shadow-slate-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
