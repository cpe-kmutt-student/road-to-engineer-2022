import { Gmap } from "./Maps/Gmap";
import { Transport } from "./Maps/Transport";

export const Maps = () => {
  return (
    <>
      <div className="section bg-white px-auto">
        <h1 className="text-center font-bold text-3xl md:text-5xl">แผนที่</h1>
        <div className="p-10 flex justify-around items-center flex-col lg:flex-row gap-10">
          <Gmap />
          <Transport />
        </div>
      </div>
    </>
  );
};
