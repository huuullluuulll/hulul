import React, { useState } from 'react';
import { Download, Search } from 'lucide-react';

const documents = [
  {
    name: 'شهادة التأسيس',
    type: 'PDF',
    referenceDate: '2024-01-15',
    status: 'مكتمل',
  },
  {
    name: 'عقد التأسيس',
    type: 'PDF',
    referenceDate: '2024-01-15',
    status: 'مكتمل',
  },
  {
    name: 'رخصة العمل',
    type: 'PDF',
    referenceDate: '2024-02-20',
    status: 'قيد المعالجة',
  },
];

export const DocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.referenceDate.includes(searchTerm)
  );

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">مستنداتي</h1>
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="بحث في المستندات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:placeholder-gray-400 transition-colors duration-200"
          />
          <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-colors duration-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">اسم المستند</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">نوع المستند</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">تاريخ المرجع</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">تحميل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredDocuments.map((doc) => (
                <tr key={doc.name} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{doc.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{doc.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{doc.referenceDate}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      doc.status === 'مكتمل' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredDocuments.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              لا توجد نتائج للبحث
            </div>
          )}
        </div>
      </div>
    </div>
  );
};