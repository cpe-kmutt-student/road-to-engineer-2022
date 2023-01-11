import { Link } from "react-router-dom";

export const TopProfile = () => {
  return (
    <div>
      <div className="bg-juicy-100 text-white w-full h-fit">
        <div className="grid grid-cols-6 py-2">
          <Link to="/openhouse" className="justify-center items-center">
            <img src="/image/backbtn.svg" alt="<" className="h-10" />
          </Link>
          <h1 className="z-50 text-xl md:text-5xl text-center col-span-4" >My Profile</h1>
          <div />
        </div>
        <div className="avatar h-full w-full flex justify-center items-center py-4">
          <div className="h-20 rounded-full bg-white">
            <img src="/image/person.svg" className="object-top" />
          </div>
        </div>
      </div>
      <svg
        className="fill-juicy-100 rotate-180 h-[5vh] w-full translate-y-[-0.5px]"
        viewBox="-0.035 -0.879 185.79 144.752"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 92.86 -0.879 L 185.755 143.873 L -0.035 143.873 L 92.86 -0.879 Z" />
      </svg>
    </div>
  );
};
