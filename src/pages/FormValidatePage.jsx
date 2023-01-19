import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'preact/hooks'
import { useAuth } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import fetch from '../utils/fetchAxios';

export const FormValidatePage = () => {
  const { token } = useParams();
  const { status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/openhouse', {replace: true});
    }
    setTimeout(() => {
      if (status == 'unauthenticated') {
        navigate('/login/form/'+token, {replace: true});
      }else if (status == 'authenticated') {
        //send token to backend
        //fetch.post('', {})
        Swal.fire({title:'ได้รับแสตมป์แล้ว', text:'คุณได้รับแสตมป์แล้ว', icon:'success', showCloseButton: false, showCancelButton: false, showConfirmButton: false, timer: 3000})
        setTimeout(()=>{
          navigate('/estamp', {replace: true});
        },3000);
      }
    },3000);
    
  },[status])
  return (
    <div className='bg-juicy-100 min-h-screen p-5 flex flex-col justify-center items-center'>
      <div className='text-2xl flex justify-center text-white items-center'>
        <div className='p-5 bg-transparent border-4 border-dashed rounded-full ring-white mr-2 animate-spin'></div>
        กรุณารอสักครู่ {status == 'unauthenticated' ? ' กำลังเข้าสู่ระบบล็อกอิน...' : 'กำลังตรวจสอบสิทธิ์...'}
      </div>
    </div>
  )
}
