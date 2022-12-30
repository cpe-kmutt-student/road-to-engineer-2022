import React, { useEffect, useState } from "react";
import ElementPC from "./ElementPC";
import ElementTablet from './ElementTablet'
import ElementMobile from "./ElementMobile";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const Timeline = () => {
  const { height, width } = useWindowDimensions();
  let varMaringin = width >= 1280 ? Math.min((((width-1280)/148)*50)+175, 225): width >= 768 ? Math.min(((width-768)/62)*20+120,165) : width > 0 ? Math.min(((width-360)/30)*35+90,125) : 0
  let varPadding = width >= 1280 ? Math.min((((width-1280)/148)*3)+11, 14): width >= 768 ? Math.min(((width-768)/62)*2+23, 25) : width > 0 ? Math.min(((width-360)/30)*2+10,12) : 0

  return (
    <>
      <div className="w-full h-full bg-contain bg-full bg-no-repeat md:bg-cover xl:bg-cover bg-road-bg-mobile md:bg-road-bg-ipad xl:bg-road-bg-pc">
        <div className="flex justify-center align-middle px-2 lg:px-10">
            <div className="object-center object-contain">
              <ElementPC/>
              <ElementTablet/>
              <ElementMobile/>
            </div>
            <div className="absolute translate-x-10 md:translate-x-28 xl:translate-x-[-40%] xl:left-1/2" style={`padding: ${varPadding}rem 0`}>
              <div className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin}px`}>
                <h2 className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">Open House</h2>
                <hr className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-40 xl:w-80"/>
                <p className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[17rem] md:max-w-md xl:max-w-xl">มะนาวต่างดุ๊ด มนุษย์ต่างดาว คุณยายกินลำไย น้ำลายยายไหลย้อย หย่อนยาน ชามเขียวคว่ำเช้า ชามขาวคว่ำค่ำ ทหารบกแบกปืนเบิกปูนไป โบกตึก เช้าฟาดผัดฟัก เย็นฟาดฟักผัด </p>
                <button className="translate-x-12 md:translate-x-32 xl:translate-x-0 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-8 xl:px-16 text-[30px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white">Open House</button>
              </div>
              <div className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin}px`}>
                <h2 className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">การแข่งขันนวัตกรรม</h2>
                <hr className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-40 xl:w-80"/>
                <p className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[17rem] md:max-w-md xl:max-w-xl">Engineering, KMUTT Science & Technology Idea Contest การแข่งขันนวัตกรรม สิ่งประดิษฐ์ ทางด้านวิทยาศาสตร์ และเทคโนโลยี ระดับชั้นมัธยมศึกษาตอนปลาย หรือเทียบเท่า </p>
                <button className="translate-x-12 md:translate-x-32 xl:translate-x-80 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-8 xl:px-16 text-[30px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white">Learn More</button>
              </div>
              <div className="flex-1 font-DB-Heavent" style={`margin-bottom: ${varMaringin}px`}>
                <h2 className="text-bloodred-200 text-[38px] md:text-7xl xl:text-8xl font-bold whitespace-nowrap">การแข่งขันตอบปัญหาวิชาการ</h2>
                <hr className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-40 xl:w-80"/>
                <p className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[17rem] md:max-w-md xl:max-w-xl">มะนาวต่างดุ๊ด มนุษย์ต่างดาว คุณยายกินลำไย น้ำลายยายไหลย้อย หย่อนยาน ชามเขียวคว่ำเช้า ชามขาวคว่ำค่ำ ทหารบกแบกปืนเบิกปูนไป โบกตึก เช้าฟาดผัดฟัก เย็นฟาดฟักผัด </p>
                <button className="translate-x-12 md:translate-x-32 xl:translate-x-0 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-8 xl:px-16 text-[30px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white">Learn More</button>
              </div>
              <div className="flex-1 font-DB-Heavent">
                <h2 className="text-bloodred-200 text-[48px] md:text-7xl xl:text-8xl font-bold">Bangmod Hackathon</h2>
                <hr className="mt-0.5 mb-3.5 border-t-[6px] border-bloodred-100 w-40 xl:w-80"/>
                <p className="text-2xl md:text-3xl xl:text-4xl mb-2.5 max-w-[17rem] md:max-w-md xl:max-w-xl">มะนาวต่างดุ๊ด มนุษย์ต่างดาว คุณยายกินลำไย น้ำลายยายไหลย้อย หย่อนยาน ชามเขียวคว่ำเช้า ชามขาวคว่ำค่ำ ทหารบกแบกปืนเบิกปูนไป โบกตึก เช้าฟาดผัดฟัก เย็นฟาดฟักผัด </p>
                <button className="translate-x-12 md:translate-x-32 xl:translate-x-80 shadow-[inset_5px_5px_5px_0_rgba(0,0,0,0.4)] border-[8px] xl:border-[12px] border-bloodred-200 font-bold rounded-full px-8 xl:px-16 text-[30px] md:text-[32px] xl:text-[40px] text-bloodred-200 bg-white">Hackathon</button>
              </div>
            </div>
        </div>
        
      </div>
    </>
  );
}
