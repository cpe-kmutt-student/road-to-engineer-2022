export const Estamp = () => {
  return (
    <div className="section bg-juicy-100 relative flex flex-col justify-center">
      <h1 className="text-center font-bold text-3xl md:text-5xl my-2 md:my-5">กิจกรรม E-STAMP</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 pb-10">
        <img src="/assets/GiftBox.svg" className="w-20 md:w-32" alt="" />
        <p className="text-white text-center md:text-2xl">
          เข้าร่วมกิจกรรมต่าง ๆ ภายในงาน, scan qr-code และสะสม E-stamp <br />
          ให้ครบตามที่กำหนด แล้วรับไปเลย
          ของที่ระลึกสุดพิเศษที่มีเฉพาะในงานนี้เท่านั้น (มีจำนวนจำกัด) !!
        </p>
      </div>
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center md:text-2xl text-white px-6 border-2 md:border-4 border-white rounded-full bg-black ">
        E-STAMP
      </button>
    </div>
  );
};

