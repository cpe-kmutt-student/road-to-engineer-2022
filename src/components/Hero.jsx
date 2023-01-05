import openHouse from "/assets/Open-House.svg";
import heroBg from "/assets/Hero-Bg.svg";
export const Hero = () => {
  return (
    <div className="flex flex-col  bg-juicy-100 text-center justify-center items-center">
      <img
        src={openHouse}
        className="object-contain  md:w-3/4 sm:w-2/4 pt-6 p-4 z-0"
      />
      <div className="relative flex justify-center  text-center">
        <img
          src={heroBg}
          className="object-cover p-2 h-full w-full lg:w-fit lg:h-fit  z-0"
        />
        <div className="absolute top-2 left-50% flex flex-col items-center">
          <p className="py-8 text-juicy-300 text-xl md:text-3xl font-bold top-1">
            การเดินทางครั้งใหม่สู่รั้วบางมด <br /> ยินดีต้อนรับทุกคนเข้าสู่
            engineering open house 2023
          </p>
          <div className="">
            <h1 className=" text-white text-2xl md:text-4xl font-semibold ">
              19-21 มกราคม 2566
            </h1>
            <p className="text-white text-xl font-semibold">
              ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            </p>
          </div>
          <button className="border-[10px] border-juicy-100 font-bold rounded-full py-1 md:px-14 px-10 text-lg md:text-2xl  text-juicy-200 bg-white">
            ลงทะเบียน
          </button>
        </div>
      </div>

      <div className="grow lg:w-1/2">
        <div className="flex flex-col m-auto md:mr-2 lg:m-auto w-fit place-content-end items-center text-center">
          {/* <ArrowDownButton
                onClick={onClickNext}
                label="Read More"
              /> */}
          อ่านรายละเอียด
        </div>
      </div>
    </div>
  );
};
