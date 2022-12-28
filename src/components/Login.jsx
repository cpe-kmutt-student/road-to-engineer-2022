import Road from "/image/road.svg";
import Logo from "/image/loginopenhouse.svg";
import { Email } from './input/EmailInput';
import { Password } from './input/PasswordInput';
import { Checkbox } from './input/CheckboxInput';
import { Button } from "./input/Button";



export const Login = () => {

  return (
    <>
      <div className="relative flex flex-col w-screen h-screen bg-juicy-200 overflow-x-hidden md:overflow-hidden">
        <div className="flex lg:absolute w-full p-2 my-5 lg:p-16 h-fit lg:h-full justify-center lg:justify-start items-start z-10">
          <img src={Logo} alt="" className="h-full lg:h-1/3 object-contain object-center scale-75 lg:scale-90" />
        </div>
        <div className="fixed md:px-5 pt-16 m-0 w-screen h-screen flex justify-start items-end z-0">
          <img src={Road} alt="" className="object-cover md:object-contain object-bottom h-2/3" />
        </div>
        
        {/* login card */}
        <div className="relative lg:absolute px-10 py-0 mb-10 md:mb-0 lg:py-24 w-full h-full flex justify-center lg:justify-end items-start lg:items-center z-20">
          <div className="bg-white h-fit w-full lg:w-1/3 rounded-xl p-10 flex flex-col shadow-lg shadow-black/50">
            <h1 className="text-juicy-200 text-4xl lg:text-6xl font-bold tracking-wide mb-2 md:mb-5">LOGIN</h1>
            <form>
              <div className="divide-y-2 divide-juicy-100/50 divide-dashed">
                <div className="space-y-2 md:space-y-4 mb-5">
                  <Email />
                  <Password />
                  <Checkbox />

                  <Button text="LOGIN" type="1" />
                  <span className="w-full flex justify-end text-lg text-decorate-100">
                    <a href="#" className="hover:text-juicy-100/75">Forgot password ?</a>
                  </span>
                </div>
                <div className="pt-8" />
              </div>
            </form>
            <Button text="SIGN IN BY GOOGLE " type="2" />
            <span className="w-full flex justify-center text-lg text-decorate-100 space-x-1 mt-2">
              <p>Need an account? </p>
              <a href="#" className="hover:text-juicy-100/75 underline">SIGN UP</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
