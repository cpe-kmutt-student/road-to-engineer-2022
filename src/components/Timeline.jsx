export const Timeline = () => {
  return (
    <>
      <div class="container bg-gray-200 mx-auto  h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div class="rounded-br-xl border-b-2 border-dashed border-bloodred-100" 
          style="left: 50%"> 
          </div>
          <div
            class="border-2-2  absolute border-dashed  border-bloodred-100 h-full border"
            style="left: 50%"
          ></div>

          {/* < Open House > */}
          <div class="mb-8 flex justify-between items-center w-full  right-timeline">
            {/* Left */}
            <div class="order-1 w-5/12 text-center">
              <h3 class="mb-3 font-bold text-bloodred-200 text-3xl">
                Open House
              </h3>
              <p class="text-sm py-4 leading-snug tracking-wide text-gray-900 text-opacity-100">
                การกลับมาอย่างยิ่งใหญ่ในรอบหลายปีของคณะวิศวกรรมศาสตร์ มจธ.
                จะมีการจัดกิจกรรมอะไร วันเเละเวลาเป็นอย่างไร คอยติดตามให้ดี!
              </p>
              <button class="border-4 border-solid px-4 py-2 text-bloodred-200 border-bloodred-200  rounded-full shadow-xl">
                Open House!
              </button>
            </div>
            {/* <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div> */}
            <div className="z-20 rounded-br-xl border-b-2 border-dashed order-1 bg-bloodred-100">
              1 
            </div>
            {/* Right */}
            <div class="order-1 w-5/12 px-6 py-4">
              <img src="/public/image/Open-House.png" alt="" srcset="" />
            </div>
          </div>

          {/* < Innovation > */}
          <div class="mb-8 flex justify-between flex-row items-center w-full left-timeline">
            {/* Left */}
            <div class="order-1 w-5/12 px-6 py-4">
              <img src="/public/image/CulComp.png" alt="" srcset="" />
            </div>

            {/* <!-- Right  --> */}
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div class="order-1 px-6 py-4 bg-red-500 text-white text-center w-5/12">
              <h3 class="mb-3 font-bold text-3xl">แข่งขันนวัตกรรม</h3>
              <p class="text-sm py-4 leading-snug tracking-wide  text-opacity-100">
                Engineering, KMUTT Science & Teachnology Idea Contest
                การแข่งขันนวัตกรรม สิ่งประดิษฐทางด้าน วิทยาศาสตร์และเทคโนโลยี
                ระดับมัธยมศึกษา ตอนปลายหรือเทียบเท่า
              </p>
              <a class="float-right" href="">
                Learn more
              </a>
            </div>
          </div>

          {/* < แข่งขันตอบปัญหาวิชาการ > */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            {/* Left */}
            <div class="order-1 text-center w-5/12">
              <h3 class="mb-3 font-bold text-bloodred-200 text-3xl">
                แข่งขันตอบ <br /> ปัญหาวิชาการ
              </h3>
              <p class="text-sm py-4 leading-snug tracking-wide  text-opacity-100">
                เวทีแข่งขันภายใต้โจทย์ทางด้านวิศวกรรม
                ระดับนักเรียนมัธยมศึกษาปลาย หรือ เทียบเท่า
              </p>
              <a class="float-right text-bloodred-200" href="">
                Learn more
              </a>
            </div>

            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>

            {/* Right */}
            <div class="order-1 w-5/12 px-6 py-4">
              <img src="/public/image/QuestComp.png" alt="" srcset="" />
            </div>
          </div>

          {/* < Bangmod Hackathon > */}
          <div class="mb-8 flex justify-between flex-row items-center w-full left-timeline">
            {/* left */}
            <div class="order-1 w-5/12 px-6 py-4">
              <img src="/public/image/Hackathon.png" alt="" srcset="" />
            </div>

            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
            </div>

            {/* Right */}
            <div class="order-1 px-6 py-4 bg-red-500 text-white text-center w-5/12">
              <h3 class="mb-3 font-bold text-white text-3xl">
                Bangmod Hackathon
              </h3>
              <p class="text-sm py-4 font-medium leading-snug tracking-wide text-white">
                โครงการแข่งขันการเขียนโปรแกรมคอมพิวเตอร์ Bangmod Hackathon 2023
                เป็นโครงการที่เปิดโอกาสให้นักเรียนระดับชั้นมัธยมศึกษาตอนปลายรวมถึงนักศึกษาอาชีวศึกษาในระดับ
                ปวช. หรือเทียบเท่า ได้เข้ามาแข่งขันการเขียน โปรแกรม โดยใช้ภาษา C
                หรือ C++
              </p>
              <button class="border-4 border-solid px-4 py-2 font-bold text-bloodred-200 hover:drop-shadow-xl border-white bg-white  rounded-full shadow-xl">
                Hackathon
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
