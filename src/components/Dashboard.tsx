import React from 'react';
import { Calendar, FileText, Bell, Building2 } from 'lucide-react';
import { UKAgenda } from './Calendar/UKHolidays';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleConsultation = () => {
    window.open('https://calendly.com/hululgroup/support', '_blank');
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">لوحة التحكم</h1>
        <div className="flex items-center space-x-4 space-x-reverse">
          <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Documents Summary Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">المستندات</h2>
            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <ul className="space-y-3">
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">رمز المصادقة</span>
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">عرض</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">خطاب UTR</span>
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">عرض</span>
            </li>
            <li className="flex items-center justify-between text-sm">
              <span className="text-gray-700 dark:text-gray-300">شهادة الشركة</span>
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">عرض</span>
            </li>
          </ul>
          <button
            onClick={() => navigate('/dashboard/documents/request')}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            طلب مستند جديد
          </button>
        </div>

        {/* Company Status Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">حالة الشركة</h2>
            <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">حالة التسجيل</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                نشط
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">الباقة الحالية</span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">ستارتر</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">تاريخ التجديد</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">15/04/2024</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard/company/upgrade')}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ترقية الباقة
          </button>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transition-all hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">إجراءات سريعة</h2>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/dashboard/documents/request')}
              className="w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors"
            >
              طلب مستند جديد
            </button>
            <button 
              onClick={handleConsultation}
              className="w-full px-4 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-colors"
            >
              جدولة استشارة
            </button>
            <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              تحديث معلومات الشركة
            </button>
          </div>
        </div>
      </div>

      {/* UK Agenda Section */}
      <div className="mt-8">
        <UKAgenda />
      </div>
    </div>
  );
};