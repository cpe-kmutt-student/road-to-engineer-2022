import { EventCard } from "../Another/EventCard";

export const Gmap = () => {
  return (
    <div className="basis-1/2">
      <div className="flex flex-col items-center justify-center gap-y-6">
        {/* Image Map */}
        <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row md:gap-6">
          <div className="md:w-1/2">
            <EventCard
              title="แผนที่มหาวิทยาลัย"
              image="/image/kmutt-map.jpeg"
            />
          </div>
          <div className="md:w-1/2">
            <EventCard
              title="แผนผังภายในงาน"
              subtitle="Coming soon ..."
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
            />
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1484.076647429227!2d100.49630788030996!3d13.6509945341971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf656e94ff13324ad!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LiY4LiZ4Lia4Li44Lij4Li1!5e0!3m2!1sth!2sth!4v1673189046392!5m2!1sth!2sth"
            className="w-full h-80 md:h-60"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
