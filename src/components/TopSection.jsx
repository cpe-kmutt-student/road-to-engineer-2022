import { CountDown } from "./CountDown";

export const TopSection = ({ onClickNext }) => {
  return (
    <div className="min-h-screen text-white select-none bg-gradient-to-b from-[#991D1D] to-[#170606]">
      <div className="flex flex-wrap justify-evenly place-content-evenly min-h-screen pb-5 z-1">
        <div className="flex flex-col w-3/4 lg:w-1/2 items-center text-center">
          <img
            src="/public/assets/roadtoengineer.png"
            className="object-contain md:w-3/4 p-2 z-0"
          />
          <div className="">
            <h1 className="py-8 text-2xl md:text-4xl font-bold ">19-21 มกราคม 2566</h1>
            <CountDown deadline="January, 19, 2023" />
          </div>
        </div>
        <div className="grow lg:w-1/2">
            <div className="flex flex-col m-auto md:mr-2 lg:m-auto w-fit place-content-end items-center text-center">   
              <img
                src="/public/assets/building.svg"
                className="object-cover p-2 h-[30vh] md:w lg:w-fit lg:h-fit  z-0"
              />
              <div
                onClick={onClickNext}
                className="flex flex-col items-center cursor-pointer w-fit px-6 py-1 z-1 rounded-full font-bold text-3xl text-center text-white bg-black"
              >
                Read More
                <img src="/public/assets/downarrow.svg" className="p-1" />
              </div>      
            </div>
        </div>
        

      </div>
    </div>

    
  );
};
