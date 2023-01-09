import { useState } from 'preact/hooks'

const allEvents = [
  {
    date: '19 มกราคม',
    info: [
      {
        department: 'วิศวกรรมโยธา (CE)',
        rounds: ['10.00 - 11.30 น.', '13.00 - 14.30 น.'],
        link: 'https://forms.gle/tC4H3neAh99aypCEA'
      },
      {
        department: 'วิศวกรรมเครื่องกล (ME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมอุตสาหการกับแมคคาทรอนิกส์ (PE&MCE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมไฟฟ้า (EE)',
        rounds: [
          'Measurement Lab (10:00 - 11:00 น.) ', 
          'Motor Control Lab (11:00 - 12:00 น.)', 
          'Illumination Laboratory (E-LU)  (13:00 - 14:00 น.) ',
          'High Voltage Lab (14:00 - 15:00 น.)',
        ],
        link: 'https://forms.gle/eZ7WpzabyjBapYWC9'
      },
      {
        department: 'วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม (ENE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเครื่องมือและวัสดุ (TME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: 'https://forms.gle/iu4BgHQrBKMtCmyi7'
      },
      {
        department: 'วิศวกรรมสิ่งแวดล้อม (ENV)',
        rounds: ['13.30 - 15.00 น.', '15.30 - 17.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมคอมพิวเตอร์ (CPE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: 'https://kmutt.me/cpeworkshop'
      },
      {
        department: 'วิศวกรรมเครื่องมือและระบบควบคุม (INC)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเคมี (CHE)',
        rounds: ['9.00 - 10.50 น.', '13.00 - 14.50 น.'],
        link: 'https://forms.gle/mfuBaFDUaRQvA5qh8'
      },
    ]
  },
  {
    date: '20 มกราคม',
    info: [
      {
        department: 'วิศวกรรมโยธา (CE)',
        rounds: ['13.00 - 14.30 น.', '15.00 - 16.30 น.'],
        link: 'https://forms.gle/tC4H3neAh99aypCEA'
      },
      {
        department: 'วิศวกรรมเครื่องกล (ME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมอุตสาหการกับแมคคาทรอนิกส์ (PE&MCE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมไฟฟ้า (EE)',
        rounds: [
          'Measurement Lab (10:00 - 11:00 น.) ', 
          'Motor Control Lab (11:00 - 12:00 น.)', 
          'Illumination Laboratory (E-LU)  (13:00 - 14:00 น.) ',
          'High Voltage Lab (14:00 - 15:00 น.)',
        ],
        link: 'https://forms.gle/eZ7WpzabyjBapYWC9'
      },
      {
        department: 'วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม (ENE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเครื่องมือและวัสดุ (TME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: 'https://forms.gle/iu4BgHQrBKMtCmyi7'
      },
      {
        department: 'วิศวกรรมสิ่งแวดล้อม (ENV)',
        rounds: ['13.30 - 15.00 น.', '15.30 - 17.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมคอมพิวเตอร์ (CPE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: 'https://kmutt.me/cpeworkshop'
      },
      {
        department: 'วิศวกรรมเครื่องมือและระบบควบคุม (INC)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเคมี (CHE)',
        rounds: ['9.00 - 10.50 น.', '13.00 - 14.50 น.'],
        link: 'https://forms.gle/mfuBaFDUaRQvA5qh8'
      },
    ]
  },
  {
    date: '21 มกราคม',
    info: [
      {
        department: 'วิศวกรรมโยธา (CE)',
        rounds: ['10.00 - 11.30 น.', '13.00 - 14.30 น.', '15.00 - 16.30 น.'],
        link: 'https://forms.gle/tC4H3neAh99aypCEA'
      },
      {
        department: 'วิศวกรรมเครื่องกล (ME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมอุตสาหการกับแมคคาทรอนิกส์ (PE&MCE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมไฟฟ้า (EE)',
        rounds: [
          'Measurement Lab (10:00 - 11:00 น.) ', 
          'Motor Control Lab (11:00 - 12:00 น.)', 
          'Illumination Laboratory (E-LU)  (13:00 - 14:00 น.) ',
          'High Voltage Lab (14:00 - 15:00 น.)',
        ],
        link: 'https://forms.gle/eZ7WpzabyjBapYWC9'
      },
      {
        department: 'วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม (ENE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเครื่องมือและวัสดุ (TME)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: 'https://forms.gle/iu4BgHQrBKMtCmyi7'
      },
      {
        department: 'วิศวกรรมสิ่งแวดล้อม (ENV)',
        rounds: ['13.30 - 15.00 น.', '15.30 - 17.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมคอมพิวเตอร์ (CPE)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.', '15.00 - 16.00 น.'],
        link: 'https://kmutt.me/cpeworkshop'
      },
      {
        department: 'วิศวกรรมเครื่องมือและระบบควบคุม (INC)',
        rounds: ['10.00 - 11.00 น.', '13.00 - 14.00 น.'],
        link: null
      },
      {
        department: 'วิศวกรรมเคมี (CHE)',
        rounds: ['9.00 - 10.50 น.', '13.00 - 14.50 น.'],
        link: 'https://forms.gle/mfuBaFDUaRQvA5qh8'
      },
    ]
  },
]

const EventRow = ({department, rounds, link}) => {
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

const EventTable = ({events}) =>{
  return (
    <table className="w-full md:text-2xl">
      <thead>
        <tr className="text-2xl md:text-3xl">
          <th>ภาควิชา</th>
          <th>รอบที่เข้าได้</th>
          <th>ลิงก์ลงทะเบียน</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => <EventRow department={event.department} rounds={event.rounds} link={event.link}/>)}
      </tbody>
    </table>
  )
}



export const Event = () => {
  const [eventId, setEventId] = useState(0)
  return (
    <div className="bg-black py-8 p-2 sm:p-8 flex flex-col justify-center">
      <p className="text-4xl pb-4 text-white text-center">กำหนดการ</p>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col gap-2 sm:gap-8 sm:flex-row">
          <div className="flex flex-row sm:flex-col justify-center gap-8">
            { 
              allEvents.map((event, index) => (
                <div key={event.date} onClick={() => setEventId(index)} className={
                  `cursor-pointer
                   text-white
                   text-xl 
                   sm:text-2xl 
                   md:text-3xl 
                   px-6 
                   py-1 
                   rounded-full 
                   whitespace-nowrap ${eventId != index ? 'bg-juicy-100 text-white' : 'bg-white text-juicy-100'}`
                  }>
                  {event.date}
                </div>
              )  )
            }
          </div>
          <div className="grow bg-white text-black rounded-2xl">
            <p className="p-4">
              <EventTable events={allEvents[eventId].info}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
