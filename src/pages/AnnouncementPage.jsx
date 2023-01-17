import { useAuth } from '../contexts/AuthContext';
import { BgRegister } from '../components/BgRegister';
import { RegisterCard } from '../components/RegisterCard';
import { useEffect } from 'preact/hooks';
import { useNavigate } from "react-router-dom";
import { Button } from '../components/input/Button';
import { Navbar } from '../components/Navbar';

export const AnnouncementPage = () => {
    const navigate = useNavigate();
    const { status, user, logout  } = useAuth();

    useEffect(()=>{
      status == "unauthenticated" && navigate("/login");
    }, [status]);

    return (
        <div className="relative bg-juicy-200 w-screen min-h-screen h-fit overflow-hidden">
            <Navbar place="annoucement" />
            <BgRegister />
            <RegisterCard title="Announcement" >
                <p className='text-center text-3xl md:text-5xl leading-loose'>
                    ยินดีต้อนรับคุณ
                    <span className='text-juicy-200 font-bold'>{` ${user?.name} `}</span>
                    <br /> กิจกรรมจะเริ่มวันที่
                    <br /> <span className='text-juicy-200 font-bold'>{` 19-21 มกราคม 2566 `}</span>
                    <br /> เตรียมตัวให้พร้อมสู่การเดินทางสุดแสนน่าตื่นเต้น ! 
                    <br /> แล้วพบกันในวันเวลาดังกล่าว ...
                </p>
                <div className='w-full flex justify-end'>
                  <span className='w-20 md:w-32'>
                    <Button text="Logout" type="2" onClick={()=>{logout()}} />
                  </span>
                </div>
            </RegisterCard>
        </div>
    );
}
