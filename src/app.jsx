import { FrontPage } from './pages/FrontPage';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/app.css';

export const App = () => {
  return (
    <>
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />        
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>

    </>
  );
}

