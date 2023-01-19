export const RuleSection = () => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-3xl text-bloodred-200 font-bold pb-2 md:pb-6 md:text-5xl">
          เงื่อนไขการได้รับ E-Stamp
        </h1>
        <div className="px-6 gap-2 md:gap-4 h-full pb-8 text-md md:text-2xl text-black">
          <ul className="list-disc">
            <li className="list-outside">E-Stamp ได้จากการ <span className="text-juicy-100 underline decoration-juicy-100/30"> สแกน qr-code และตอบแบบสอบถาม</span>ตามกิจกรรมต่าง ๆ ภายในงาน
              <ul className="list-disc">
                <li className="list-outside"> <span className="text-juicy-100 underline decoration-juicy-100/30">E-Stamp ซุ้มกิจกรรม</span> ได้จากการเข้าร่วมซุ้มกิจกรรม เช่น หากเข้ากิจกรรมส่วนกลาง จะได้รับ E-Stamp เวทีกลาง </li>
                <li className="list-outside"> <span className="text-juicy-100 underline decoration-juicy-100/30">E-Stamp กิจกรรม Workshop</span> ได้จากเข้าร่วม Workshop ตามภาควิชาต่าง ๆ เช่น หากเข้าร่วม Workshop ของ CPE  จะได้รับ E-Stamp Workshop ของ CPE
                </li>
                <li className="list-outside"> <span className="text-juicy-100 underline decoration-juicy-100/30">E-Stamp พิเศษ</span> ได้จากการเข้าร่วมแข่งขัน onsite ในโครงการต่าง ๆ คือ BangMod Hackathon 2023, Engineering Quest 2023 และ Idea Contest
                </li>
              </ul>
            </li>
            <li className="list-outside">แต่ละกิจกรรมสามารถรับ E-Stamp
              ได้เพียง 1 ครั้ง <span className="text-juicy-100 underline decoration-juicy-100/30">เท่านั้น</span>  สแกน qr-code และทำแบบสอบถาม
              จึงจะได้รับ E-Stamp
              </li>            
              <li className="list-outside">E-Stamp ได้จากการเข้าร่วมกิจกรรม โดยจะต้องสแกน qr-code และตอบแบบสอบถาม</li>
            <li className="list-outside">E-Stamp ซุ้มกิจกรรม ได้จากซุ้มกิจกรรมส่วนภาคและ RC ส่วนเวทีกลางจะได้จากกิจกรรมส่วนกลาง <span className="text-juicy-100 underline decoration-juicy-100/30">เท่านั้น</span>
            </li>
            <li className="list-outside">E-Stamp พิเศษ จะได้เฉพาะผู้ที่เข้าร่วมการแข่งขันภายใต้โครงการ Road to Engineering at Bangmod <span className="text-juicy-100 underline decoration-juicy-100/30"> เท่านั้น</span>
            </li>
            <li className="list-outside">E-Stamp Workshop ได้จากกิจกรรม Workshop ของแต่ละภาค</li>
          </ul>
        </div>
      </div>
    </>
  )
}
