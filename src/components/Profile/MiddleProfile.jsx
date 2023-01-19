import { Card } from './Card'
import { useNavigate } from 'react-router-dom'
import { EditProfileModal } from './EditProfileModal'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'preact/hooks'

const ProfileTitle = ({user}) => (
  <div className="flex gap-4 items-center" >
    My Account
    <div>
      <EditProfileModal user={user} />
    </div>
  </div>
)
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
};

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


export const MiddleProfile = () => {
  const { user, status, logout } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (status == 'authenticated') {
    }
  }, [status])
  
  return (
    <div className="p-2 grow">
      {user && <Card title={<ProfileTitle user={user}/>} >
        <div className="space-y-2">
          <ProfileList label="Name" text={user.name} img="/image/person.svg" />
          <ProfileList label="Email" text={user.email} img="/image/mail.svg" />
          <ProfileList label="Phone" text={user.phone} img="/image/phone.svg" />
        </div>
      </Card>}
      <Card title="My Activity">
        <ActivityButton img="/image/stamp.svg" text="My E-Stamp" onClick={() => navigate('/estamp')} />
      </Card>
    </div>
  )
}
