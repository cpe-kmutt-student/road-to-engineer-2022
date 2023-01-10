import { EventCard } from "./Another/EventCard";
import concert from "/image/concert.svg";
import food from "/image/food.svg";

export const Another = () => {
  return (
    <>
      <div className="section bg-white">
        <h1 className="text-center font-bold text-3xl md:text-5xl my-2 md:my-5">กิจกรรมอื่นๆ</h1>
        <div className="flex flex-col justify-center items-center gap-y-6 md:flex-row md:gap-10 ">
          <EventCard
            title="Concert"
            image={concert}
            detail="มีกิจกรรม Folk song เล่นดนตรีจากพี่ ๆ วิศวฯ บางมด ที่จะเล่นตลอดทั้งวัน บริเวณใต้ตึก
            CB4 คณะวิศวกรรมศาสตร์ น้อง ๆ คนไหนอยากมาฟังพี่ ๆ เล่นดนตรี ห้ามพลาดเด็ดขาด!
            ซุ้มอาหาร"
          />
          <EventCard
            title="ซุ้มอาหาร"
            image={food}
            detail="มีซุ้มอาหารและเครื่องดื่มจากพี่ ๆ วิศวฯ บางมด รอบบริเวณคณะวิศวกรรมศาสตร์ เพื่อให้บริการน้อง ๆ ระหว่างเดินดูคณะตลอดทั้งวัน 
            ตั้งแต่เวลา 09.00 - 18.00 น. บอกเลยว่าพี่ ๆ คัดสรรมาเป็นอย่างดี เพราะฉะนั้นไม่มาไม่ได้แล้ว !"
          />
        </div>
      </div>
    </>
  );
};
