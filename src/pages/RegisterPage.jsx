import { BgRegister } from "../components/BgRegister"
import { Consent } from '../components/Consent';
import { Help } from '../components/HelpContact';
import { BasicRegister } from '../components/Register';
import { SuccessCard } from "../components/SuccessCard";
import { useState } from 'preact/hooks';
import { Navbar } from "../components/Navbar";

export const RegisterPage = () => {
  const [consent, setConsent] = useState(false);
  return (
    <div className="relative bg-juicy-200 w-screen h-fit overflow-hidden">

      <Navbar place="register" />

      {/*-- /#bg --*/}
      <BgRegister />

      {/*-- /#register --*/}
      <div id="register" className="">
        {/* { !consent ? <Consent setConsent={setConsent} /> : <BasicRegister /> } */}
        {false ? <Consent setConsent={setConsent} /> : <BasicRegister />}
      </div>

      <div>
        <Help />
      </div>
    </div>
  );
}
