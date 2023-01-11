import { Card } from './Card'
import { useNavigate } from 'react-router-dom'


export const MiddleProfile = () => {
  const navigate = useNavigate()

  const ProfileList = ({ img, label, text }) => {
    return (
      <>
        <div className='flex flex-row space-x-4 items-center'>
          <div id="picture" className="flex justify-center items-center">
            <img src={img} alt="" className="h-8 w-8 md:h-12 md:w-12" />
          </div>
          <div className="flex flex-col text-juicy-200">
            <h2 className='font-bold text-lg md:text-3xl'>{label}</h2>
            <p className='text-lg md:text-3xl'>{text}</p>
          </div>
        </div>
      </>
    )
  }

  const ActivityButton = ({ img, text, onClick }) => {
    return (
      <div onClick={onClick} className="flex cursor-pointer items-center h-12 sm:h-16 text-juicy-200 justify-between">
          <div className="flex gap-4">
            <img classname="" src={img} alt="stamp"/>
            <div className="text-xl sm:text-2xl md:text-3xl self-center break-normal text-clip">
              {text}
            </div>
          </div>
          <div className="text-4xl">{">"}</div>
        </div>
    )
  };

  const ProfileTitle = ({onClick}) => (
      <div className="flex gap-4 cursor-pointer text-2xl sm:text-3xl" onClick={onClick}>
        My Account
        <img src='/image/edit.svg' alt='edit' />
      </div>
    )
  
  return (
    <div className="p-2 grow">
      <Card title={<ProfileTitle onClick={()=>{alert("yay")}}/>} >
        <div className="space-y-2">
          <ProfileList label="Name" text="ชื่อ สกุล" img="/image/person.svg" />
          <ProfileList label="Email" text="abc@kmutt.ac.th" img="/image/mail.svg" />
          <ProfileList label="Phone" text="095-xxx-xxxx" img="/image/phone.svg" />
        </div>
      </Card>
      <Card title="My Activity">
        <ActivityButton img="/image/stamp.svg" text="My E-Stamp" onClick={() => navigate('/estamp')} />
      </Card>
    </div>
  )
}
