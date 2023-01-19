import { Button } from "../input/Button";
import { useAuth } from "../../contexts/AuthContext";

export const FooterProfile = () => {
  const { logout } = useAuth();

  return (
    <div>
      <img src="/image/triangle.svg" alt="triangle" className="object-fill w-screen h-8"/>
      <div className="relative h-fit w-full flex flex-col justify-center items-center overflow-hidden bg-black p-6">
        <div className="w-[75%] md:w-1/2">
         <Button onClick={()=>logout()} type={1} text="LOG OUT"/>
        </div>
      </div>
    </div>
  );
}
