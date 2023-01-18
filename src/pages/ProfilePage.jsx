
import { useEffect } from "preact/hooks"
import { FooterProfile } from "../components/Profile/FooterProfile"
import { MiddleProfile } from "../components/Profile/MiddleProfile"
import { TopProfile } from "../components/Profile/TopProfile"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const ProfilePage = () => {
  const { status } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if (status == 'unauthenticated') {
      navigate('/login/profile', {replace: true});
    }
  },[status])

  return (
    <div className="min-h-screen flex flex-col justify-between scrollbar-thin scrollbar-thumb-juicy-100 scrollbar-track-juicy-100/25 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <TopProfile />
      <MiddleProfile />
      <FooterProfile />
    </div>
  )
}
