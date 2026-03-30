import React from 'react';
import { User, Settings, ShoppingBag, Bell, ChevronRight, Activity, TrendingUp, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  React.useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo, navigate]);

  if (!userInfo) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-4">
              <User size={40} />
            </div>
            <h3 className="font-bold text-slate-900">{userInfo.name}</h3>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Premium Member</p>
          </div>

          <nav className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {[
              { icon: Activity, label: 'Overview', active: true },
              { icon: ShoppingBag, label: 'Subscriptions', active: false },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map((item, idx) => (
              <button
                key={idx}
                className={`w-full flex items-center justify-between p-4 transition-colors ${
                  item.active ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                <ChevronRight size={16} />
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-grow space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                  <TrendingUp size={20} />
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">Total Savings</p>
              <h4 className="text-2xl font-extrabold text-slate-900">$420.50</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Calendar size={20} />
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-1">Active Plans</p>
              <h4 className="text-2xl font-extrabold text-slate-900">3</h4>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <Activity size={20} />
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-1">Workout Streak</p>
              <h4 className="text-2xl font-extrabold text-slate-900">14 Days</h4>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="font-bold text-slate-900">Recent Service Activity</h2>
              <button className="text-sm text-primary-600 font-bold hover:underline">View All</button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                        <ShoppingBag className="text-slate-400" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Personal Wellness Audit</h4>
                        <p className="text-xs text-slate-500">March {20+i}, 2026</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-slate-900">$129.00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
