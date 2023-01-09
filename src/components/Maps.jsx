import { Gmap } from "./Maps/Gmap";
import { Transport } from "./Maps/Transport";

export const Maps = () => {
  return (
    <>
      <div className="section bg-white">
        <h1 className="section-title">แผนที่</h1>
        <div className="flex justify-center items-center flex-col md:flex-row gap-10">
          <Gmap />
          <Transport />
        </div>
      </div>
    </>
  );
};
