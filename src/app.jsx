import { FrontPage } from './pages/FrontPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />        
        </Routes>
      </AuthProvider>
    </BrowserRouter>

    </>
  );
}

