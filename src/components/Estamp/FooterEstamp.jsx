import { useState, useMemo, useEffect } from 'preact/hooks';
import { useAuth } from '../../contexts/AuthContext';
import fetch from '../../utils/fetchAxios';

export const FooterEstamp = () => {
  const { status, user } = useAuth();
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

  const [data, setData] = useState(null)

  useEffect(() =>{
    if(status == 'authenticated')
    fetch.post('/stamp', user).then(
      (res)=>{
        setData(res.data);
      }
    )
  }, [status])

  useEffect(() => {
    
    let dummy = {
      central: {
        ...rulesep.central,
        collect: data?.stamp.filter((e)=>
          e.name === "central_norm"
        ).filter((e)=>
          e.done === true
        ).length,
      },
      exhibition: {
        ...rulesep.exhibition,
        collect: data?.stamp.filter((e)=>
          (e.catagory === "department_stamp" && (e.name !== "central_norm")) || e.catagory === "special_stamp"
        ).filter((e)=>
          e.done === true
        ).length,
      },
      workshop: {
        ...rulesep.workshop,
        collect: data?.stamp.filter((e)=>
          e.catagory === "workshop_stamp"
        ).filter((e)=>
          e.done === true
        ).length,
      },
    }

    dummy = {
      central: {
        ...dummy.central,
        check: dummy.central.collect >= dummy.central.rule
      },
      exhibition: {
        ...dummy.exhibition,
        check: dummy.exhibition.collect >= dummy.exhibition.rule
      },
      workshop: {
        ...dummy.workshop,
        check: dummy.workshop.collect >= dummy.workshop.rule
      },
    }
    setRulesep(dummy)

  
  }, [status, data])

  useEffect(() => {
    if (status == 'authenticated') {
      fetch.post('/stamp',{
        _id:user._id
      }).then((res) => {
        const central = res.data?.stamp.filter((e) => 
          e.catagory === "department_stamp"
        ).filter((e) => 
          e.name.split("_")[0] === "central"
        ).filter((e) => e.done).length;
        const exhibition = res.data?.stamp.filter((e) =>
          e.catagory === "special_stamp"
        ).filter((e) => e.done).length;
        const workshop = res.data?.stamp.filter((e) =>
          e.catagory === "workshop_stamp"
        ).filter((e) => e.done).length;
        
        console.log(central,exhibition,workshop);
      })
    }
  },[status]);
  return (
    <div>
      <img src="/image/triangle.svg" alt="triangle" className="object-fill w-screen h-8" />
      <div className="bg-black text-white text-left flex justify-center">
        <div className="w-full px-6 flex flex-col gap-2 pb-4 md:w-3/4 max-w-[768px]">
          <div>
            <h1 className="text-3xl text-center font-bold py-4">เงื่อนไขการรับของที่ระลึก</h1>
            <div className='grid grid-cols-8 text-xl md:text-2xl'>
              { [rulesep.central, rulesep.exhibition].map((e) => {
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
              { [rulesep.central, rulesep.workshop].map((e) => {
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
