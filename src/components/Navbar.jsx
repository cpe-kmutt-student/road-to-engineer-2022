import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const Navbar = ({ place }) => {
  const { status ,logout } = useAuth();
  return (
    <>
      <div className="fixed h-fit w-full t-0 l-0 z-50">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl text-bloodred-100">Road to Engineering</Link>

            { place == "openhouse" ?
            <>
            <a href="#workshop" className="hidden md:flex btn btn-ghost normal-case text-xl">กิจกรรม</a>
            <a href="#faq" className="hidden md:flex btn btn-ghost normal-case text-xl">FAQ's</a>
            <a href="#map" className="hidden md:flex btn btn-ghost normal-case text-xl">แผนที่</a> 
            </>
            :
            <></>
            }             
          </div>
          <div className="flex-none gap-2">
            { place != "openhouse" ?
              <Link to="/openhouse" className="btn btn-ghost normal-case text-xl"> กลับสู่ <span className="text-juicy-100 ml-2">{`Openhouse`}</span> </Link> : status == "authenticated" ?
              <button onClick={()=>logout()} className="btn btn-ghost normal-case text-xl">Logout</button> :
              <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link> }
          </div>
        </div>

      </div>
    </>
  )
}
