import { useState } from "preact/hooks";
import { Bus } from "./Transports/Bus";
import { MiniBus } from "./Transports/MiniBus";
import { Bts } from "./Transports/Bts";
import { Car } from "./Transports/Car";
export const Transport = () => {
  const [index, setIndex] = useState(0);
  const tabList = [
    { name: "รถเมล์", component: <Bus /> },
    { name: "รถโดยสาร", component: <MiniBus /> },
    { name: "รถไฟฟ้า", component: <Bts /> },
    { name: "รถยนต์", component: <Car /> },
  ];
  return (
    <div className="basis-1/2 bg-white border border-t-0 border-juicy-100 min-w-fit md:min-w-0 w-full h-full sm:h-[30rem] min-h-max rounded-2xl">
      <div className="tab bg-juicy-100 pt-5 rounded-xl min-w-fit w-full flex-nowrap px-0 mx-0">
        {tabList.map((t, id) => {
          return (
            <a
              class={`tab tab-lifted w-full rounded-t-2xl text-white text-xl md:text-2xl bg-juicy-100  ${
                id == index ? "tab-active text-juicy-100" : ""
              }`}
              onClick={() => setIndex(id)}
            >
              {t.name}
            </a>
          );
        })}
      </div>

      <div className="text-lg lg:text-xl p-6">
        <p>{tabList[index].component}</p>
      </div>
    </div>
  );
};
