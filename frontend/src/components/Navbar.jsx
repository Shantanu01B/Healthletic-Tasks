import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <nav className="glass sticky top-0 z-50 py-4 px-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-600 tracking-tight">
          Healthletic<span className="text-slate-900">Lifestyle</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-primary-600 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-primary-600 transition-colors">Contact</Link>
          
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                <User size={20} />
                <span>Dashboard</span>
              </Link>
              <button onClick={logoutHandler} className="text-slate-500 hover:text-red-600 transition-colors">
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-shadow shadow-md">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 px-6 flex flex-col space-y-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          {userInfo ? (
            <>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <button onClick={() => { logoutHandler(); setIsOpen(false); }} className="text-left text-red-600">Logout</button>
            </>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-primary-600 font-bold">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
