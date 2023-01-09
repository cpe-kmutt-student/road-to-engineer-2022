import openHouse from "/assets/Open-House.svg";
import { useNavigate } from "react-router-dom";
import heroBg from "/assets/Hero-Bg.svg";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="
      relative
      h-[110vh] 
      md:h-[120vh] 
    bg-juicy-100 
      text-center 
      bg-eng-bg
      bg-[position:top_70vh_center]
      sm:bg-[position:top_50vh_center]
      md:bg-[position:top_45vh_center]
      lg:bg-[position:top_40vh_center]
      xl:bg-[position:top_30vh_center]  
      bg-[size:100%_auto] 
      bg-no-repeat ">
      <div className="flex flex-col justify-center items-center">
        <img
          src={openHouse}
          className="object-contain md:w-1/2 sm:w-3/4 p-4 pt-32 sm:pt-24 md:pt-18  z-0"
        />
        <div className="relative flex justify-center  text-center">
          <div className="top-2 left-50% flex flex-col items-center">
            <p className="pt-8 text-juicy-300 text-xl md:text-3xl font-bold top-1">
              การเดินทางครั้งใหม่สู่รั้วบางมด <br /> ยินดีต้อนรับทุกคนเข้าสู่
              engineering open house 2023
            </p>
            <div className="pt-4">
              <h1 className=" text-white text-5xl md:text-7xl font-semibold ">
                19-21 มกราคม 2566
              </h1>
              <p className="text-white pt-2 text-xl font-semibold">
                ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <button onClick={() => navigate("/login")} className="border-[5px]  border-juicy-100 font-bold rounded-full mt-16 sm:mt-8 py-1 md:px-14 px-10 text-lg md:text-2xl text-juicy-200 bg-white">
                ลงทะเบียน
              </button>
              <img src="/assets/downarrow.svg" className="w-10"/>
            </div>
            
            
          </div>
        </div>
      </div>
      <img src="/assets/trianglemask.svg" className="absolute object-fill aspect-auto w-screen h-[10vh] bottom-0 md:h-[20vh]"/>
      
    </div>
  );
};
