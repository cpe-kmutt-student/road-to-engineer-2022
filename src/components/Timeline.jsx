import { Arrow } from "./timeline/Arrow";
import BGInnovation from "/image/bg-innovation.svg";
import BGOpenhouse from "/image/bg-openhouse.svg";
import BGHackathon from "/image/bg-footer.svg";
import Culcomp from "/image/culcomp.svg";
import Hackathon from "/image/hackathon.svg";
import Openhouse from "/image/openhouse.svg";
import Questcom from "/image/questcom.svg";
export const Timeline = () => {
  return (
    <>
      <div className="mx-auto h-full overflow-hidden">
        <div className="relative wrap h-full">
          <div
            className="hidden md:inline border-2-2  absolute border-dashed  border-bloodred-100 h-full border"
            style="left: 50%"
          />

          {/* < Open House > */}
          <div className="relative mb-8 h-[50vh] flex justify-between items-center w-full right-timeline">
            {/* Left */}
            <div className="order-1 px-6 w-5/12 text-center p-10">
              <h3 className="mb-3 font-bold text-bloodred-200 text-3xl">
                Open House
              </h3>
              <p className="text-sm py-4 leading-snug tracking-wide text-gray-900 text-opacity-100">
                การกลับมาอย่างยิ่งใหญ่ในรอบหลายปีของคณะวิศวกรรมศาสตร์ มจธ.
                จะมีการจัดกิจกรรมอะไร วันเเละเวลาเป็นอย่างไร คอยติดตามให้ดี!
              </p>
              <button className="border-4 border-solid px-4 py-2 text-bloodred-200 border-bloodred-200  rounded-full shadow-xl">
                Open House!
              </button>
            </div>

            <Arrow direction={"left"} />

            {/* Right */}
            <div className="order-1 w-5/12 px-6 py-4 flex justify-center items-center">
              <img src={Openhouse} alt="" srcset="" />
            </div>

            {/* Bg */}
            <img
              src={BGOpenhouse}
              className="absolute object-fill -z-20 left-0 p-0 m-0 h-full w-full min-w-screen"
            />
          </div>

          {/* < Innovation > */}
          <div className="relative mb-8 h-[50vh] flex justify-between flex-row items-center w-full left-timeline">
            {/* Left */}
            <div className="order-1 w-5/12 px-6 py-4 flex justify-center items-center">
              <img src={Culcomp} alt="" srcset="" />
            </div>

            <Arrow />

            {/* <!-- Right  --> */}
            <div className="order-1 px-6 py-4 bg-red-500 text-white text-center w-5/12">
              <h3 className="mb-3 font-bold text-3xl">แข่งขันนวัตกรรม</h3>
              <p className="text-sm py-4 leading-snug tracking-wide  text-opacity-100">
                Engineering, KMUTT Science & Teachnology Idea Contest
                การแข่งขันนวัตกรรม สิ่งประดิษฐทางด้าน วิทยาศาสตร์และเทคโนโลยี
                ระดับมัธยมศึกษา ตอนปลายหรือเทียบเท่า
              </p>
              <a className="float-right" href="">
                Learn more
              </a>
            </div>
            <img
              src={BGInnovation}
              className="absolute object-fill -z-10 left-0 p-0 m-0 h-[150%] w-full min-w-screen"
            />
          </div>

          {/* < แข่งขันตอบปัญหาวิชาการ > */}
          <div className="relative mb-8 h-[50vh] flex justify-between items-center w-full right-timeline">
            {/* Left */}
            <div className="order-1 text-center w-5/12">
              <h3 className="mb-3 font-bold text-bloodred-200 text-3xl">
                แข่งขันตอบ <br /> ปัญหาวิชาการ
              </h3>
              <p className="text-sm py-4 leading-snug tracking-wide  text-opacity-100">
                เวทีแข่งขันภายใต้โจทย์ทางด้านวิศวกรรม
                ระดับนักเรียนมัธยมศึกษาปลาย หรือ เทียบเท่า
              </p>
              <a className="float-right text-bloodred-200" href="">
                Learn more
              </a>
            </div>

            <Arrow direction={"left"} />

            {/* Right */}
            <div className="order-1 w-5/12 px-6 py-4 flex justify-center items-center">
              <img src={Questcom} alt="" srcset="" />
            </div>
          </div>

          {/* < Bangmod Hackathon > */}
          <div className="relative h-[70vh] flex justify-between flex-row items-center w-full left-timeline">
            {/* left */}
            <div className="order-1 w-5/12 px-6 py-4 flex justify-center items-center">
              <img src={Hackathon} alt="" srcset="" />
            </div>

            <Arrow />

            {/* Right */}
            <div className="order-1 px-6 py-4 bg-red-500 text-white text-center w-5/12">
              <h3 className="mb-3 font-bold text-white text-3xl">
                Bangmod Hackathon
              </h3>
              <p className="text-sm py-4 font-medium leading-snug tracking-wide text-white">
                โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2023
                เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลายรวมถึงนักศึกษาอาชีวศึกษาในระดับ
                ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม โดยใช้ภาษา C
                หรือ C++
              </p>
              <button className="border-4 border-solid px-4 py-2 font-bold text-bloodred-200 hover:drop-shadow-xl border-white bg-white  rounded-full shadow-xl">
                Hackathon
              </button>
            </div>

            {/* Bg */}
            <img
              src={BGHackathon}
              className="absolute object-fill -z-20 left-0 p-0 m-0 h-full w-full min-w-screen"
            />

          </div>
        </div>
      </div>
    </>
  );
}
