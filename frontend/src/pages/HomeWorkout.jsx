import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/workouts');
        setWorkouts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching workouts:', error);
        setLoading(false);
      }
    };
    fetchWorkouts();
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
            Home <span className="text-primary-600">Workouts</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Expert-led fitness routines you can perform anywhere, anytime.
          </p>
          <div className="mt-4 w-24 h-1.5 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col md:flex-row h-full"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${
                    workout.difficulty === 'Beginner' ? 'bg-green-500' :
                    workout.difficulty === 'Intermediate' ? 'bg-orange-500' : 'bg-red-500'
                  }`}>
                    {workout.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-8 md:w-3/5 flex flex-col">
                <div className="flex items-center gap-2 text-primary-600 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold text-sm">{workout.duration}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{workout.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {workout.description}
                </p>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Exercise Breakdown</p>
                  <div className="space-y-3">
                    {workout.exercises.map((exercise, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-700">{exercise.name}</span>
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-md">{exercise.reps}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-8 w-full py-4 bg-primary-600 text-white font-bold rounded-2xl hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary-100">
                  Start Workout
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeWorkout;
