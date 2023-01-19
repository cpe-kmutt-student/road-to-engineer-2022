import { FrontPage } from './pages/FrontPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AnnouncementPage } from './pages/AnnouncementPage';
import { OpenHousePage } from './pages/OpenHousePage';
import { ProfilePage } from './pages/ProfilePage';
import { EstampPage } from './pages/EstampPage';
import { FormValidatePage } from './pages/FormValidatePage';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';

export const App = () => {
  return (
    <>
    <BrowserRouter basename="/">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/:type" element={<LoginPage />} />
          <Route path="/login/:type/:token" element={<LoginPage />} />
          <Route path="/openHouse" element={<OpenHousePage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/:type" element={<RegisterPage />} />
          <Route path="/register/:type/:token" element={<RegisterPage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/openhouse" element={<OpenHousePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/estamp" element={<EstampPage />} />
          <Route path="/estamp/:token" element={<EstampPage />} />
          <Route path="/form/:token" element={<FormValidatePage />} />
          <Route path="*" element={<Navigate to="/" />} />        
        </Routes>
      </AuthProvider>
    </BrowserRouter>

    </>
  );
}

