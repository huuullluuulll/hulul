import React from 'react';
import { CreditCard, ArrowUpCircle, Plus, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const addOns = [
  { name: 'UK Accounting Service - Annual', price: 1099 },
  { name: 'Advisory Services (Hourly)', price: 250 },
  { name: 'UK Company Closing', price: 200 },
  { name: 'Bank Card Shipping', price: 149 },
  { name: 'Name & Share Changes', price: 79 },
  { name: 'Visa Consultancy (1 hr.)', price: 120 },
  { name: 'EORI Number', price: 99 },
];

export const CompanyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">شركتي</h1>
      
      {/* Current Plan */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8 transition-colors duration-200">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">الباقة الحالية</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">£220</span>
              <span className="text-gray-500 dark:text-gray-400">/سنوياً</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">باقة ستارتر</p>
          </div>
          <button 
            onClick={() => navigate('/dashboard/company/upgrade')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowUpCircle className="w-5 h-5" />
            ترقية الباقة
          </button>
        </div>
      </div>

      {/* Add-ons */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-200">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">الخدمات الإضافية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div key={addon.name} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-gray-900 dark:text-white">{addon.name}</h3>
                <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">£{addon.price}</span>
                {addon.name.includes('Annual') && <span className="text-gray-500 dark:text-gray-400">/سنوياً</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};