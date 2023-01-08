import { EventCard } from "./Another/EventCard";

export const Another = () => {
  return (
    <>
      <div className="section bg-white">
        <h1 className="section-title">กิจกรรมอื่นๆ</h1>
        <div className="flex flex-col justify-center items-center gap-y-6 md:flex-row md:gap-10 ">
          <EventCard
            title="Concert"
            image="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            detail="lorem ipsum sdfsd"
          />
          <EventCard
            title="ซุ้มอาหาร"
            image="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
            detail="lorem ipsum sdfsd"
          />
        </div>
      </div>
    </>
  );
};
