export const Timeline = () => {

  return (
    <>
      <div className="w-full h-full bg-contain bg-full bg-no-repeat md:bg-cover lg:bg-cover bg-road-bg-mobile md:bg-road-bg-ipad lg:bg-road-bg-pc">
        <div className="flex justify-center align-middle px-10">
            <div className="object-center object-contain">
            <img className="max-w-full hidden sm:hidden md:hidden lg:block" src="/image/road-pc.svg" alt="" srcset="" />
            <img className="w-full hidden sm:hidden md:block lg:hidden " src="/image/road-tablet.svg" alt="" srcset="" />
            <img className="w-full block sm:block md:hidden lg:hidden " src="/image/road-mobile.svg" alt="" srcset="" />
            </div>
            <div className="absolute flex-1 max-w-4xl p-20">
              <h2 className="text-bloodred-200 text-8xl font-bold">Open House</h2>
              <hr className="mt-6 mb-14 border-4 border-bloodred-100 w-80"/>
              <p className="text-4xl mb-10">มะนาวต่างดุ๊ด มนุษย์ต่างดาว คุณยายกินลำไย น้ำลายยายไหลย้อย หย่อนยาน ชามเขียวคว่ำเช้า ชามขาวคว่ำค่ำ ทหารบกแบกปืนเบิกปูนไป โบกตึก เช้าฟาดผัดฟัก เย็นฟาดฟักผัด </p>
              <button className="border-[12px] border-bloodred-200 font-bold rounded-full py-1 px-16 text-[40px] text-bloodred-200 bg-white">Open House</button>
            </div>
        </div>
        
      </div>
    </>
  );
}
