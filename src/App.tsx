import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { LoginPage } from './pages/auth/LoginPage';
import { SignupPage } from './pages/auth/SignupPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './components/Dashboard';
import { CompanyPage } from './pages/company/CompanyPage';
import { DocumentsPage } from './pages/documents/DocumentsPage';
import { RequestDocument } from './pages/documents/RequestDocument';
import { TransactionsPage } from './pages/transactions/TransactionsPage';
import { SupportPage } from './pages/support/SupportPage';
import { NewTicketPage } from './pages/support/NewTicketPage';
import { SettingsPage } from './pages/settings/SettingsPage';
import { UpgradePlan } from './pages/company/UpgradePlan';
import { supabase } from './lib/supabase';

function App() {
  const { setSession, checkSession } = useAuthStore();

  useEffect(() => {
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [setSession, checkSession]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="company/upgrade" element={<UpgradePlan />} />
          <Route path="documents" element={<DocumentsPage />} />
          <Route path="documents/request" element={<RequestDocument />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="support/new" element={<NewTicketPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;