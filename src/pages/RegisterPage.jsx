import signup1 from "/image/signup1.svg"
import signup2 from "/image/signup2.svg"
import signup3 from "/image/signup3.svg"
import signup4 from "/image/signup4.svg"
import { Consent } from '../components/Consent';
import { BasicRegister } from '../components/Register';
import { useState } from 'preact/hooks';

export const RegisterPage = () => {
  const [consent, setConsent] = useState(false);
  return (
    <div className="relative bg-juicy-200 w-screen h-fit overflow-hidden">

      {/*-- /#bg --*/}
      <div id="bg" className="flex w-full">
        <img src={signup1} alt="" className="absolute h-1/3 right-10 -top-20 md:h-2/3 md:-top-20 md:right-40" />
        <img src={signup1} alt="" className="absolute h-1/4 top-32 -left-12 md:h-1/2 md:top-32 md:-left-4" />
        <img src={signup2} alt="" className="absolute h-1/4 bottom-32 -left-4 md:h-1/3 md:-bottom-10 md:-left-2" />
        <img src={signup3} alt="" className="absolute h-1/4 -right-2 top-60 md:h-1/3 md:top-10 md:-right-2" />
        <img src={signup4} alt="" className="absolute h-1/4 -bottom-10 -right-10 md:h-1/3 md:-bottom-20 md:-right-10" />
      </div>

      {/*-- /#register --*/}
      <div id="register" className="">
        { !consent ? <Consent setConsent={setConsent} /> : <BasicRegister /> }
        {/* { true ? <Consent setConsent={setConsent} /> : <BasicRegister /> } */}
      </div>


      {/* <div className="h-screen"></div> */}

    </div>
  );
}
