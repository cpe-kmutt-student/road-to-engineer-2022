import { useState } from 'preact/hooks'
import { allSchedules } from '../content/allSchedules'

const ScheduleRow = ({department, rounds, link}) => {
  return (
    <tr className="border-b-2">
      <th>{department}</th>
      <th>{rounds.map((round) => <>{round}<br/></>)}</th>
      <th className='p-2'>
        {
          link ? <a href={link} target="_blank" className='text-blue-500'>ลงทะเบียน</a> : '-'
        }
      </th>
    </tr>
  )
}

const ScheduleTable = ({schedules}) =>{
  return (
    <table className="w-full md:text-2xl">
      <thead>
        <tr className="text-2xl md:text-3xl">
          <th>ภาควิชา</th>
          <th>รอบที่เข้าได้</th>
          <th>
            ลงทะเบียน 
            <br /> <span className='text-lg text-juicy-100'> (เฉพาะภาค) </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {schedules.map((schedule) => <ScheduleRow department={schedule.department} rounds={schedule.rounds} link={schedule.link}/>)}
      </tbody>
    </table>
  )
}



export const Schedule = () => {
  const [scheduleId, setScheduleId] = useState(0)
  return (
    <div id="workshop" className="bg-black py-8 p-2 sm:p-8 flex flex-col justify-center">
      <p className="text-juicy-100 font-bold text-3xl md:text-5xl pb-4 text-white text-center mb-2">กิจกรรม Workshop <br /> ของแต่ละภาควิชา</p>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-2 sm:gap-8 sm:flex-row">
          <div className="flex flex-row sm:flex-col justify-center gap-4 md:gap-8">
            { 
              allSchedules.map((schedule, index) => (
                <div key={schedule.date} onClick={() => setScheduleId(index)} className={
                  `cursor-pointer
                   text-white
                   text-xl 
                   sm:text-2xl 
                   md:text-3xl 
                   rounded-full 
                   px-2
                   py-1
                   whitespace-nowrap ${scheduleId != index ? 'bg-juicy-100 text-white' : 'bg-white text-juicy-100'}`
                  }>
                  {schedule.date}
                </div>
              )  )
            }
          </div>
          <div className="grow bg-white text-black rounded-2xl">
            <p className="p-4">
              <ScheduleTable schedules={allSchedules[scheduleId].info}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
