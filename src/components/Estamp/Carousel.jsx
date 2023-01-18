import { useState, useEffect } from 'preact/hooks'
import { allStampBox } from "./schema/allStampsBox"
import { StampSection } from './StampSection';
import { RuleSection } from './RuleSection';

export const Carousel = ({ items }) => {

  const [stampsBox, setStampsBox] = useState(allStampBox);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    setStampsBox([
      {
        name: "rc_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "ce_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "ce_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "me_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "me_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "pemce_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "pemce_work",
        catagory: "workshop_stamp",
        done: true
      },
      {
        name: "ee_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "ee_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "ene_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "ene_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "tme_norm",
        catagory: "department_stamp",
        done: true
      },
      {
        name: "tme_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "env_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "env_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "cpe_norm",
        catagory: "department_stamp",
        done: true
      },
      {
        name: "cpe_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "inc_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "inc_work",
        catagory: "workshop_stamp",
        done: false
      },
      {
        name: "che_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "che_work",
        catagory: "workshop_stamp",
        done: true
      },
      {
        name: "central_norm",
        catagory: "department_stamp",
        done: false
      },
      {
        name: "central_question",
        catagory: "special_stamp",
        done: false
      },
      {
        name: "central_innovation",
        catagory: "special_stamp",
        done: false
      },
      {
        name: "central_hackathon",
        catagory: "special_stamp",
        done: true
      },
    ]
    );
  }, []);

  return (
    <div className="container mx-auto bg-white h-256 w-full max-w-[400px] md:max-w-[768px] mb-6 rounded-2xl p-6 md:p-10 flex flex-col shadow-lg shadow-black/50 text-gray-500">
      <div className="carousel w-full h-fit">
        <div id="item1" className="carousel-item w-full h-fit flex flex-col">
          <StampSection
            title="ซุ้มกิจกรรม"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "department_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[0]) {
                    case "central":
                      return { ...e, name: "เวทีกลาง" };
                    case "pemce":
                      return { ...e, name: "pe" };
                    default:
                      return { ...e, name: e.name.split("_")[0] };
                  }
                })
            }
            type="exhibition" />
          <StampSection
            title="E-Stamp พิเศษ"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "special_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[1]) {
                    case "question":
                      return { ...e, name: "ตอบปัญหา" };
                    case "innovation":
                      return { ...e, name: "นวัตกรรม" };
                    default:
                      return { ...e, name: e.name.split("_")[1] };
                  }
                })
            }
            type="special" />

        </div>

        <div id="item2" className="carousel-item w-full h-fit flex flex-col">
          <StampSection
            title="กิจกรรม Workshop"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "workshop_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[0]) {
                    case "pemce":
                      return { ...e, name: "pe" };
                    default:
                      return { ...e, name: e.name.split("_")[0] };
                  }
                })
            }
            type="workshop" />
        </div>
      </div>

      <div className="w-full h-fit flex justify-center">
        <input type="checkbox" id="rule-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="rule-modal" className="absolute right-2 top-2 text-juicy-200 font-bold">✕</label>
            <RuleSection />
          </div>
        </div>
        <label htmlFor="rule-modal" className="rounded-lg bg-juicy-200 px-2 active:translate-y-2 text-white shadow-md text-lg md:text-2xl">เงื่อนไขการได้รับ E-Stamp</label>
      </div>
      <div className='flex flex-row justify-center gap-4 pt-8'>
        <a className='text-center underline decoration-juicy-100/30' href="#item1">{`page 1 `} </a>
        <a className='text-center underline decoration-juicy-100/30' href="#item2">{`page 2 `} </a>
      </div>

    </div>

  )
}
