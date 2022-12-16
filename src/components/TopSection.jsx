export const TopSection = ({onClickNext}) => {
  return (
    <>
      <div className="min-h-[100vh] object-contain text-white select-none bg-gradient-to-b from-[#991D1D] to-[#170606]">
        <div className="flex justify-evenly place-content-evenly min-h-[100vh] pb-5 z-1 bg-[position:bottom] bg-no-repeat bg-[size:100vw_110%] bg-[url('/public/assets/combinedcurve.svg')]">
          <img src="/public/assets/lgstar1.svg" className="" />
          <div className="flex flex-col items-center">
            <img src="/public/assets/roadtoengineer.png" className="max-h-[40vh] pt-[100px]" />
            <img src="/public/assets/building.svg" className="max-h-[50vh]" />
            <div onClick={onClickNext} className="flex flex-col font-bold text-center items-center cursor-pointer text-white ">
              Read More
              <img src="/public/assets/downarrow.svg" className="p-1"/>
            </div>
          </div>
          <img src="/public/assets/lgstar2.svg" className="" />
        </div>
      </div>
      
      <img src="/public/assets/bottomcurve.svg" className="w-[105vw] -translate-y-1" />
    </>
  )
}
