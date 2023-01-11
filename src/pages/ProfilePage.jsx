import { FooterProfile } from "../components/Profile/FooterProfile"
import { MiddleProfile } from "../components/Profile/MiddleProfile"
import { TopProfile } from "../components/Profile/TopProfile"

export const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between scrollbar-thin scrollbar-thumb-juicy-100 scrollbar-track-juicy-100/25 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <TopProfile />
      <MiddleProfile />
      <FooterProfile />
    </div>
  )
}
