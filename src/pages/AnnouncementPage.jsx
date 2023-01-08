import { useAuth } from '../contexts/AuthContext';
import { BgRegister } from '../components/BgRegister';
import { RegisterCard } from '../components/RegisterCard';

export const AnnouncementPage = () => {
    const { status } = useAuth();
    const user = "ชื่อผู้ใช้"
    return (
        <div className="relative bg-juicy-200 w-screen min-h-screen h-fit overflow-hidden">
            <BgRegister />
            <RegisterCard title="Announcement" >
                <p className='text-center text-3xl md:text-5xl leading-loose'>
                    ยินดีต้อนรับคุณ
                    <span className='text-juicy-200 font-bold'>{` ${user} `}</span>
                    <br /> กิจกรรมจะเริ่มวันที่
                    <br /> <span className='text-juicy-200 font-bold'>{` 19-21 มกราคม 2566 `}</span>
                    <br /> เตรียมตัวให้พร้อมสู่การเดินทางสุดแสนน่าตื่นเต้น ! 
                    <br /> แล้วพบกันในวันเวลาดังกล่าว ...
                </p>
            </RegisterCard>

        </div>
    );
}
