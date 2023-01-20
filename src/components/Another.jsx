import { EventCard } from "./Another/EventCard";
import concert from "/image/concert.svg";
import food from "/image/food.svg";
import talk1 from "/image/talk-show1.svg"
import talk2 from "/image/talk-show2.svg"

export const Another = () => {
  return (
    <>
      <div className="section bg-white">
        <h1 className="text-center font-bold text-3xl md:text-5xl my-2 md:my-5">กิจกรรมอื่นๆ</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-24 mx-2 md:mx-8 lg:mx-20">
        {/* <div className="flex flex-col justify-center items-center gap-y-6 md:flex-row md:gap-10 "> */}
          <EventCard
            title="Concert"
            image={concert}
            detail="มีกิจกรรม Folk song เล่นดนตรีจากพี่ ๆ วิศวฯ บางมด ที่จะเล่นตลอดทั้งวัน บริเวณใต้ตึก
            CB4 คณะวิศวกรรมศาสตร์ น้อง ๆ คนไหนอยากมาฟังพี่ ๆ เล่นดนตรี ห้ามพลาดเด็ดขาด !"
          />
          <EventCard
            title="ซุ้มอาหารและเครื่องดื่ม"
            image={food}
            detail="มีซุ้มอาหารและเครื่องดื่มจากพี่ ๆ วิศวฯ บางมด รอบบริเวณคณะวิศวกรรมศาสตร์ เพื่อให้บริการน้อง ๆ ระหว่างเดินดูคณะตลอดทั้งวัน 
            ตั้งแต่เวลา 09.00 - 18.00 น. บอกเลยว่าพี่ ๆ คัดสรรมาเป็นอย่างดี เพราะฉะนั้นไม่มาไม่ได้แล้ว !"
          />
          <EventCard
            title="Talk Show #1"
            image={talk1}
            detail="แชร์เทคนิคการทำ Portfolio/ประสบการณ์การฝึกงาน/ชีวิตในรั้วม. โดยนักศึกษาปัจจุบัน"
          />
          <EventCard
            title="Talk Show #2"
            image={talk2}
            detail="Talk Show#2 แชร์ประสบการณ์การทำงาน โดยนักศึกษาเก่า"
          />
        </div>
        <section className="w-auto flex flex-col justify-center items-center my-14">
          <h2 className="font-bold text-3xl md:text-4xl my-2 md:my-5">รับสมัครนักศึกษา Active Recruitment TCAS 2 ปี 2566 (หลักสูตรนานาชาติ)</h2>
          <div className="flex flex-col justify-center max-w-xl ">
            <span className="font-bold text-xl md:text-2xl text-juicy-100">
              ขั้นตอน 
            </span>
            <div className="px-3">
              <p className="md:text-2xl">
                1. ลงทะเบียน เข้าร่วมกิจกรรม Open house
              </p>
              <p className="md:text-2xl">
                2. เตรียม Portfolio และ Transcript  แล้วอัปโหลดไฟล์ไว้ใน Cloud / Google Drive / One Drive 
              </p>
              <p className="md:text-2xl">
                3. นำข้อมูลในข้อที่ 2 มาสมัครที่บูธ รับสมัครนักศึกษา บริเวณอาคารเรียนรวม 4 ชั้น 1 เพื่อยื่นเอกสารผ่านระบบรับสมัคร Online
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
