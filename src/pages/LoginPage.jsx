import { Login } from '../components/Login';
import { Navbar } from '../components/Navbar'
import { Help } from '../components/HelpContact';

export const LoginPage = () => {
  return (
    <div>
      <Navbar place="login" />
      <Login />
      <div>
        <Help />
      </div>
    </div>
  );
}
