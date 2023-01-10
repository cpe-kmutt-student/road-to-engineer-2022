import { ArrowDownButton } from "./ArrowDownButton";
import { CountDown } from "./CountDown";
import { StarsBg } from "./StarsBg";

export const TopSection = ({ onClickNext }) => {
  return (
    <div className="min-h-screen text-white select-none bg-gradient-to-b from-[#991D1D] to-[#170606]">
      <StarsBg numOfStar={100}/>
      <div className="flex flex-wrap justify-evenly place-content-evenly min-h-screen pb-5 z-1">
        <div className="flex flex-col w-3/4 lg:w-1/2 items-center text-center">
          <img
            src="/assets/roadtoengineer.png"
            className="object-contain md:w-3/4 p-2 z-0"
          />
          <div className="">
            <h1 className="py-8 text-5xl md:text-7xl font-bold tracking-wider">19-21 มกราคม 2566</h1>
            <CountDown deadline="January, 19, 2023" />
          </div>
        </div>
        <div className="grow lg:w-1/2">
            <div className="flex flex-col space-y-10 m-auto md:mr-2 lg:m-auto w-fit place-content-end items-center text-center">   
              <img
                src="/assets/building.svg"
                className="object-cover p-2 h-[30vh] md:w lg:w-fit lg:h-fit  z-0"
              />
              <ArrowDownButton
                onClick={onClickNext}
                label="Read More"
              />
            </div>
        </div>
        

      </div>
    </div>

    
  );
};
