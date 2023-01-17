import { Login } from '../components/Login';
import { Navbar } from '../components/Navbar'

export const LoginPage = () => {
  return (
    <div>
      <Navbar place="login" />
      <Login />
    </div>
  );
}
