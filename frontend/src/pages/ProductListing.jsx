import React from 'react';
import { Search, Filter, Star, ShoppingBag, Loader2 } from 'lucide-react';
import api from '../api';

const ProductListing = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [keyword, setKeyword] = React.useState('');
  const [category, setCategory] = React.useState('All');

  React.useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/products?keyword=${keyword}`);
      setProducts(data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(p => p.category === category);

  const categories = ['All', 'Supplements', 'Coaching', 'Equipment', 'Apparel'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Explore Our Services</h1>
          <p className="text-slate-600 mt-2">Premium wellness solutions for your lifestyle</p>
        </div>

        <form onSubmit={handleSearch} className="relative max-w-md w-full">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium">
            Search
          </button>
        </form>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              category === cat 
                ? 'bg-primary-600 text-white shadow-md shadow-primary-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin text-primary-600" size={48} />
          <p className="text-slate-500 font-medium font-inter">Loading premium services...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="aspect-square bg-slate-100 flex items-center justify-center p-8">
                  {/* Placeholder for real images */}
                  <div className="w-full h-full bg-primary-50 rounded-2xl flex items-center justify-center">
                    <ShoppingBag className="text-primary-300" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-tighter">{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 truncate">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-xl font-extrabold text-slate-900">${product.price}</span>
                    <button className="bg-slate-900 text-white p-2.5 rounded-lg hover:bg-primary-600 transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-500 text-lg">No products found for this search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
