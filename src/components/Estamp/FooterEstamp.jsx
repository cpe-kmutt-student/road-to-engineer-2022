import { useState } from 'preact/hooks';

export const FooterEstamp = () => {
  const [rulesep, setRulesep] = useState({
    central: {
      name: "central",
      label: <>เก็บ E-Stamp เวทีกลาง</>,
      collect: 0,
      rule: 1,
      check: false,
    },
    exhibition: {
      name: "exhibition",
      label: <>สะสม E-Stamp ซุ้มกิจกรรม <span className="text-juicy-100">*</span>ครบ 5 ดวง</>,
      collect: 0,
      rule: 5,
      check: false,
    },
    workshop: {
      name: "workshop",
      label: "สะสม E-Stamp Workshop ครบ 2 ดวง",
      collect: 0,
      rule: 2,
      check: false,
    },
  }
  )

  const [rulecheck, setRuleCheck] = useState(
    {
      "case1": [rulesep.central, rulesep.exhibition],
      "case2": [rulesep.central, rulesep.workshop]
    });

  return (
    <div>
      <img src="/image/triangle.svg" alt="triangle" className="object-fill w-screen h-8" />
      <div className="bg-black text-white text-left flex justify-center">
        <div className="w-full px-6 flex flex-col gap-2 pb-4 md:w-3/4 max-w-[768px]">
          <div>
            <h1 className="text-3xl text-center font-bold py-4">เงื่อนไขการรับของที่ระลึก</h1>
            <div className='grid grid-cols-8 text-xl md:text-2xl'>
              {rulecheck.case1.map((e) => {
                return (
                  <>
                    <label htmlFor={e.name} className="col-span-6">{e.label}</label>
                    <p>{`${e.collect} / ${e.rule}`}</p>
                    <input 
                      type="checkbox" 
                      className="justify-self-end h-6 w-6 self-center
                        form-checkbox 
                        rounded
                        border-gray-400
                        focus:border-juicy-100 
                        focus:ring 
                        focus:ring-juicy-100 
                        focus:ring-opacity-30
                        focus:ring-offset-0
                        checked:text-juicy-100 opacity-100" checked={e.check} disabled />
                  </>
                )
              })}
              <p className="text-juicy-100 col-span-8 text-lg">*E-Stamp พิเศษ ใช้แทน E-Stamp ซุ้มกิจกรรมได้</p>
            </div>
            <div className="divider before:bg-white after:bg-white mx-3=4">หรือ</div>
            <div className='grid grid-cols-8 gap-2 text-xl'>
              {rulecheck.case2.map((e) => {
                return (
                  <>
                    <label htmlFor={e.name} className="col-span-6">{e.label}</label>
                    <p>{`${e.collect} / ${e.rule}`}</p>
                    <input 
                      type="checkbox" 
                      className="justify-self-end h-6 w-6 self-center
                        form-checkbox 
                        rounded
                        border-gray-400
                        focus:border-juicy-100 
                        focus:ring 
                        focus:ring-juicy-100 
                        focus:ring-opacity-30
                        focus:ring-offset-0
                        checked:text-juicy-100 opacity-100" checked={e.check} disabled />
                  </>
                )
              })}
            </div>
            <div className="text-juicy-100 text-2xl text-center pt-4">สามารถรับของที่ระลึกได้ที่จุดลงทะเบียน ใต้อาคารเรียนรวม 4</div>
          </div>  
        </div>
      </div>
    </div>
  )
}
