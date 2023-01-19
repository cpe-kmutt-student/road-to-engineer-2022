import { Link } from "react-router-dom";

export const TopEstamp = () => {
  return (
    <div className="bg-juicy-100 text-white h-1/4">
      <div className="flex justify-between py-2">
        <Link to="/profile" className="justify-center items-center">
          <img src="/image/backbtn.svg" alt="<" className="h-10" />
        </Link>
        <div className="flex h-fit col-span-6">
          <img src="/assets/Open-House.svg" alt="Open House" className="z-50 text-xl text-center object-cover max-w-[70vw] max-h-[20vh]" />
        </div>
        <div className="h-10 w-10"></div>
      </div>
    </div>
    )
}
