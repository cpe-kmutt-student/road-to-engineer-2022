import { useState, useEffect } from 'preact/hooks'
import { allStampBox } from "./schema/allStampsBox"
import { StampSection } from './StampSection';
import { RuleSection } from './RuleSection';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import fetch from '../../utils/fetchAxios';

export const Carousel = ({ items }) => {
  const [stampsBox, setStampsBox] = useState(allStampBox);
  const { token } = useParams();
  const { status, user } = useAuth();
  const navigate = useNavigate();

  const handleStamp = (type) => {
    switch (type) {
      case "main":
      case "quest":
      case "hackathon":
      case "innovation":
      case "exhibition":
        withReactContent(Swal).fire({
          imageUrl: '/image/frame-ex-alert.svg',
          imageHeight: 150,
          imageAlt: '',
          title: <h1 className="text-3xl text-black">Success !</h1>,
          html: <p className="text-2xl text-black">ยินดีด้วย <br /> คุณได้รับ E-Stamp 1 ดวง</p>,
          confirmButtonText: <p className="font-bold text-lg">ตกลง</p>,
          confirmButtonColor: '#D7560D',
          customClass: {
            confirmButton: 'h-fit py-1 px-8',
          }
        })
        navigate('/estamp', {replace: true});
        break;
      case "workshop":
        withReactContent(Swal).fire({
          imageUrl: '/image/frame-ws-alert.svg',
          imageHeight: 150,
          imageAlt: '',
          title: <h1 className="text-3xl text-black">Success !</h1>,
          html: <p className="text-2xl text-black">ยินดีด้วย <br /> คุณได้รับ E-Stamp 1 ดวง</p>,
          confirmButtonText: <p className="font-bold text-lg">ตกลง</p>,
          confirmButtonColor: '#D7560D',
          customClass: {
            confirmButton: 'h-fit py-1 px-8',
          }
        })
        navigate('/estamp', {replace: true});
        break;
      case "complete":
        withReactContent(Swal).fire({
          imageUrl: '/image/frame-complete-alert.svg',
          imageHeight: 150,
          imageAlt: '',
          title: <h1 className="text-3xl text-black">Mission Complete !</h1>,
          html: <p className="text-2xl text-black">คุณสะสม E-stamp <br />ครบตามกำหนดแล้ว <br /> อย่าลืมไปรับของที่ระลึกนะ !</p>,
          confirmButtonText: <p className="font-bold text-lg">ตกลง</p>,
          confirmButtonColor: '#D7560D',
          showCancelButton: true,
          cancelButtonText: <p className="font-bold text-lg">สถานที่รับ</p>,
          cancelButtonColor: '#D7560D',
          customClass: {
            confirmButton: 'h-fit py-1 px-8',
            cancelButton: 'h-fit py-1 px-8',
          }
        }).then((result)=>
          result.dismiss === Swal.DismissReason.cancel && 
            Swal.fire(
              'icon',
              'ที่รับ ไม่รู้จะใส่ไร เอาไอนี่ไปก่อนละกัน :)',
              'งรืม'
            )
        )
        break;
    }

  }

  // mock UI
  useEffect(() => {
    if (status == 'authenticated') {  
      fetch.post('/stamp',{
        _id: user._id
      }).then((res) => {
        console.log("help us help us");
        const { data } = res;
        console.log(data)
        setStampsBox(res.data.stamp);
      })
    }
    if (token)
      handleStamp(token);
  }, [token, status]);


  return (
    <div className="container mx-auto bg-white h-256 w-full max-w-[400px] md:max-w-[768px] mb-6 rounded-2xl p-6 md:p-10 flex flex-col shadow-lg shadow-black/50 text-gray-500">
      <div className="carousel w-full h-fit">
        <div id="item1" className="carousel-item w-full h-fit flex flex-col">
          <StampSection
            title="ซุ้มกิจกรรม"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "department_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[0]) {
                    case "central":
                      return { ...e, name: "เวทีกลาง" };
                    case "pemce":
                      return { ...e, name: "pe" };
                    default:
                      return { ...e, name: e.name.split("_")[0] };
                  }
                })
            }
            type="exhibition" />
          <StampSection
            title="E-Stamp พิเศษ"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "special_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[1]) {
                    case "question":
                      return { ...e, name: "ตอบปัญหา" };
                    case "innovation":
                      return { ...e, name: "นวัตกรรม" };
                    default:
                      return { ...e, name: e.name.split("_")[1] };
                  }
                })
            }
            type="special" />

        </div>

        <div id="item2" className="carousel-item w-full h-fit flex flex-col">
          <StampSection
            title="กิจกรรม Workshop"
            stamps={
              stampsBox
                .reverse()
                .filter((e) => {
                  return e.catagory === "workshop_stamp"
                })
                .map((e) => {
                  switch (e.name.split("_")[0]) {
                    case "pemce":
                      return { ...e, name: "pe" };
                    default:
                      return { ...e, name: e.name.split("_")[0] };
                  }
                })
            }
            type="workshop" />
        </div>
      </div>

      <div className="w-full h-fit flex justify-center">
        <input type="checkbox" id="rule-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="rule-modal" className="absolute right-2 top-2 text-juicy-200 font-bold">✕</label>
            <RuleSection />
          </div>
        </div>
        <label htmlFor="rule-modal" className="rounded-lg bg-juicy-200 px-2 active:translate-y-2 text-white shadow-md text-lg md:text-2xl">เงื่อนไขการได้รับ E-Stamp</label>
      </div>
      <div className='flex flex-row justify-center gap-4 pt-8'>
        <a className='text-center underline decoration-juicy-100/30' href="#item1">{`page 1 `} </a>
        <a className='text-center underline decoration-juicy-100/30' href="#item2">{`page 2 `} </a>
      </div>

    </div>

  )
}
