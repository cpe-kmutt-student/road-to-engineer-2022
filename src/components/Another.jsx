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
            detail="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
          <EventCard
            title="ซุ้มอาหาร"
            image={food}
            detail="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum!"
          />
        </div>
      </div>
    </>
  );
};
