import { Button } from "../input/Button";

export const FooterProfile = () => {
  return (
    <div>
      <img src="/image/triangle.svg" alt="triangle" className="object-fill w-screen h-8"/>
      <div className="relative h-fit w-full flex flex-col justify-center items-center overflow-hidden bg-black p-6">
        <div className="w-[75%] md:w-1/2">
         <Button type={1} text="LOG OUT"/>
        </div>
      </div>
    </div>
  );
}
