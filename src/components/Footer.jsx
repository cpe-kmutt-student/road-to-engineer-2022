import kmuttlogo from '/assets/kmuttlogo.svg'
import smoLogo from '/assets/smoLogo.svg'

export const Footer = () => {
  return (
    <>
      <div className="relative h-full w-full flex flex-col overflow-hidden bg-bloodred-300 -z-10">
        <div className="z-50 min-h-[8rem] bg-gradient-to-b from-transparent to-black">
          <div className="flex flex-row justify-center space-x-4 mt-10">
            <img src={kmuttlogo} alt="kmuttlogo" className="h-20" />
            <img src={smoLogo} alt="smoLogo" className="h-20" />
          </div>
          <div className="flex flex-col justify-center py-20 md:pb-0 text-white">
            <h2 className="text-[48px] md:text-7xl xl:text-8xl text-center font-bold pb-5 md:pb-10">Our Supporters</h2>
            <h3 className="text-[32px] md:text-4xl xl:text-5xl text-center">Sponsor & Partnership</h3>
            <div class="flex flex-wrap gap-4 justify-center my-10 mx-10">
              <div class="p-4 w-32 rounded-lg flex items-center justify-center bg-white shadow-lg">01</div>
              <div class="p-4 w-32 rounded-lg flex items-center justify-center bg-white shadow-lg">02</div>
              <div class="p-4 w-32 rounded-lg flex items-center justify-center bg-white shadow-lg">03</div>
              <div class="p-4 w-32 rounded-lg flex items-center justify-center bg-white shadow-lg">04</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
