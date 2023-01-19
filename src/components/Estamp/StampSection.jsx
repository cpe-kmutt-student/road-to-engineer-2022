export const StampSection = ({ title, stamps, type }) => {
  return (
    <>
      <div className="h-fit">
        <h1 className="text-center text-3xl text-bloodred-200 font-bold pb-2 md:pb-6 md:text-5xl">
          {title}
        </h1>
        <div className="grid grid-cols-4 gap-2 md:gap-4 h-full pb-8">
          {stamps.map((e) => {
            return (
              <>
                <div className={e.done ? "opacity-100" : "opacity-50"} >
                  <div className="relative flex justify-center items-center h-[64px] md:h-[128px]">
                    {
                      (type === "exhibition" &&
                        <>
                          <img src="/image/stampframe.svg" alt="" className="absolute h-[64px] md:h-[128px]" />
                          <h2 className="absolute text-bloodred-300 font-bold text-[20px] md:text-[36px] uppercase">{e.name}</h2>
                        </>
                      )
                      ||
                      (
                        type === "workshop" &&
                        <>
                          <img src="/image/stampframews.svg" alt="" className="absolute h-[64px] md:h-[128px]" />
                          <h2 className="absolute text-[12px] md:text-[24px] text-white bottom-[40px] md:bottom-[80px] uppercase">{e.name}</h2>
                        </>
                      )
                      ||
                      (type === "special" &&
                        <>
                          <img src="/image/stampframe.svg" alt="" className="absolute h-[64px] md:h-[128px]" />
                          <h2 className="absolute text-bloodred-300 font-bold text-[12px] md:text-[26px] uppercase">{e.name}</h2>
                        </>
                      )
                    }
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
