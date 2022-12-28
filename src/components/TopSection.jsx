import { CountDown } from "./CountDown";

export const TopSection = ({ onClickNext }) => {
  return (
    <>
      <div className="min-h-screen object-contain text-white select-none bg-gradient-to-b from-[#991D1D] to-[#170606]">
        <div className="flex justify-evenly place-content-evenly min-h-screen pb-5 z-1 bg-[position:bottom] bg-no-repeat bg-[size:107vw_75%] md:bg-[size:100vw_100%] lg:bg-[size:100vw_110%] bg-[url('/public/assets/combinedcurve.svg')]">
          <img
            src="/public/assets/lgstar1.svg"
            className="absolute -left-24 top-14 md:-left-10 md:top-14 lg:-top-32 lg:left-0 lg:relative lg:min-h-full"
          />
          <div className="flex flex-col items-center justify-center ">
            <img
              src="/public/assets/roadtoengineer.png"
              className="min-h-[20vh] max-h-[40vh] sm:min-h-[25vh] sm:max-h-[45vh] lg:min-h-[25vh] lg:max-h-[30vh] p-5 object-cover"
            />
            <h1 className="py-6 text-3xl font-bold ">19-21 มกราคม 2566</h1>
            <CountDown deadline="January, 19, 2023" />
            <div className="flex flex-col items-center justify-center translate-y-10 sm:translate-y-[0]">
              <img
                src="/public/assets/building.svg"
                className="min-h-[30vh] max-h-[40vh] sm:min-h-[40vh] pt-10 sm:pt-0 object-cover z-0"
              />
            </div>
            <div
              onClick={onClickNext}
              className="flex flex-col items-center absolute bottom-[5%] cursor-pointer pt-5 z-1 font-bold text-2xl text-center text-white "
            >
              Read More
              <img src="/public/assets/downarrow.svg" className="p-1" />
            </div>
          </div>

          <img
            src="/public/assets/lgstar2.svg"
            className="absolute -right-24 top-14 md:-right-10 md:top-14 lg:-top-32 lg:left-0 lg:relative lg:min-h-full"
          />
        </div>
      </div>

      <img
        src="/public/assets/bottomcurve.svg"
        className="w-[105vw] -translate-y-1"
      />
    </>
  );
};
