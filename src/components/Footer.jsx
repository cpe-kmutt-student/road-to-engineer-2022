import kmuttlogo from '/assets/kmuttlogo.svg'
import smoLogo from '/assets/smoLogo.svg'
import campHub from '/image/sponsor/camphub.svg'
import heng from '/image/sponsor/heng.svg'
import loong from '/image/sponsor/loong.svg'
import major from '/image/sponsor/major.svg'
import pastel from '/image/sponsor/pastel.svg'
import peptein from '/image/sponsor/peptein.png'
import techno from '/image/sponsor/techno.svg'
import tp from '/image/sponsor/tp.svg'
import farmluck from '/image/sponsor/farmluck.svg'

const bigSponsors = [
  campHub,
  peptein,
  pastel
]

const sponsors = [
  heng,
  loong,
  major,
  techno,
  tp,
  farmluck
]

const Sponsor = ({sponsorSrc, isBig}) => {
  return (
    <div class={`p-2 ${isBig ? "w-48 h-32" : "w-32 h-16"} rounded-lg flex items-center justify-center bg-white shadow-lg object-cover`}>
      <img src={sponsorSrc} className="max-h-full" alt="sponsor"/>
    </div>
  )
}

export const Footer = () => {
  return (
    <>
      <div className="relative h-full w-full flex flex-col overflow-hidden bg-bloodred-300 -z-10">
        <div className="z-50 min-h-[8rem] bg-gradient-to-b from-transparent to-black">
          <div className="flex flex-row justify-center space-x-4 mt-10">
            <img src={kmuttlogo} alt="kmuttlogo" className="h-20" />
            <img src={smoLogo} alt="smoLogo" className="h-20" />
          </div>
          <div className="flex flex-col justify-center py-5 md:pb-0 text-white">
            <h2 className="text-[48px] md:text-7xl xl:text-8xl text-center font-bold pb-5 md:pb-10">Our Supporters</h2>
            <h3 className="text-[32px] md:text-4xl xl:text-5xl text-center">Sponsor & Partnership</h3>
            <div class="flex flex-wrap gap-4 justify-center mt-10 mx-10">
              {
                bigSponsors.map((sponsorSrc) => {
                  return <Sponsor sponsorSrc={sponsorSrc} isBig={true}/>
                })
              }
            </div>
            <div class="flex flex-wrap gap-4 justify-center my-10 mx-10">
              {
                sponsors.map((sponsorSrc) => {
                  return <Sponsor sponsorSrc={sponsorSrc}/>
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
