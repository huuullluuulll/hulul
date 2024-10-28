import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useThemeStore } from '../store/themeStore';
import { useAuthStore } from '../store/authStore';

export const DashboardLayout = () => {
  const { isDarkMode } = useThemeStore();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};