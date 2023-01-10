import { Button } from "./input/Button";
import { Radio } from "./input/RadioInput";
import { Email } from "./input/EmailInput";
import { Password } from "./input/PasswordInput";
import { Phone } from "./input/Phone";
import { Text } from "./input/TextInput";
import { Dropdown } from "./input/DropdownInput";
import { DataPolicy } from "./DataPolicy";
import { useState, useEffect, useRef } from 'preact/hooks';
import fetch from "../utils/fetchAxios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const StudentRegister = ({ input, setInput }) => {
  const studentGrade = {
    "MiddleSchool": "มัธยมศึกษาตอนต้น (ม.1-3)",
    "HighSchool": "มัธยมศึกษาตอนปลาย (ม.4-6)",
    "Vocational": "ประกาศนียบัตรวิชาชีพ (ปวช.)",
    "HighVocational": "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    "University": "มหาวิทยาลัย",
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mb-5 items-center">
        <Dropdown
          name="educationLevel" label="ระดับการศึกษา" option={studentGrade} input={input} setInput={setInput} value={input.studentGrade}
        />
        <Text name="schoolName" label="ชื่อสถานศึกษา" input={input} setInput={setInput} value={input.schoolName} />
      </div>
    </>
  )
}

export const BasicRegister = () => {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
    accountType: '',
    educationLevel: '',
    schoolName: '',
  });

  const accType = {
    Student: "นักเรียน/นักศึกษา",
    Parent: "ผู้ปกครอง",
    Teacher: "ครู-อาจารย์",
    Other: "บุคคลทั่วไป",
  }

  const navigate = useNavigate();

  const [isStudent, setIsStudent] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const { login } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    fetch.post('/register/create', input)
      .then((res) => {
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
          icon: 'success',
          title: 'Signed Up successfully !'
        })
        login(input.email, input.password)
        navigate('/login');
      })
      .catch((error) => {
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        }).fire({
          icon: 'error',
          title: 'Email has already used !'
        })
        setInput({
          ...input,
          email: "",
          password: "",
          passwordConfirmation: ""
        })
        setIsConfirming(false);
        setIsInvalid(false);
      })
    e.preventDefault();
  }

  const handleSignUpButton = async (e) => {
    e.preventDefault();
    if (
      input.firstname.length &&
      input.lastname.length &&
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email) &&
      input.phone.length &&
      input.password.length &&
      input.passwordConfirmation.length &&
      input.accountType.length &&
      (isStudent ? input.educationLevel.length && input.schoolName.length : true)
    ) {
      setIsConfirming(true);
      setIsInvalid(false);
    }

    else
      setIsInvalid(true);
  }

  return (
    <>
      <div className="w-screen min-h-screen md:h-fit p-10 md:p-20 flex justify-center items-center">

        <div className="bg-white w-full h-fit md:h-fit p-8 md:p-10 flex flex-col rounded-xl shadow-lg shadow-black/50 text-gray-500 z-50">

          <h1 className="w-full text-juicy-200 text-4xl lg:text-6xl font-bold tracking-wide mb-2 md:mb-5 uppercase">
            {!isConfirming ? "Sign Up" : "นโยบายข้อมูลส่วนบุคคล"}
          </h1>

          <form className="space-y-5 w-full" onSubmit={handleSubmit}>
            {!isConfirming && <>
              <div className="space-y-2">
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Text name="firstname" label="ชื่อ" onChange={handleChange} value={input.firstname} />
                  <Text name="lastname" label="นามสกุล" onChange={handleChange} value={input.lastname} />
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Email onChange={handleChange} value={input.email} />
                  <Phone onChange={handleChange} value={input.phone} />
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Password type="normal" onChange={handleChange} value={input.password} />
                  <Password type="confirm" onChange={handleChange} value={input.passwordConfirmation} />
                </div>
              </div>
              <div>
                <h2 className="text-xl">ประเภทผู้ใช้งาน</h2>
                <div className="grid grid-cols-2 md:grid-cols-4" onChange={(e) => {
                  e.target.value == "Student" ? setIsStudent(1) : setIsStudent(null);
                  const e_account = {
                    target: {
                      id: e.target.name,
                      value: e.target.value
                    }
                  }
                  handleChange(e_account);
                }}>
                  {Object.keys(accType).map((name) =>
                    <Radio name={name} label={accType[name]} group="accountType" checked={input.accountType == name} />
                  )
                  }
                </div>
              </div>
              {isStudent && <StudentRegister handleChange={handleChange} input={input} setInput={setInput} />}
              <div className="md:h-6" />
              {isInvalid && <p className="text-red-500 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</p>}
              <Button text="Sign Up" type="1" onClick={handleSignUpButton} />

            </>}
            {isConfirming && <>
              <DataPolicy />
              <span className="w-full flex justify-center">
                <div className="w-full md:w-2/3 flex flex-row items-center space-x-2 md:space-x-20">
                  <Button text="ยอมรับ" type="1" onClick={handleSubmit} href="#" />
                  <Button text="ยกเลิก" type="2" onClick={() => setIsConfirming(false)} />
                </div>
              </span>
            </>
            }

            <span className="w-full flex justify-center text-lg text-decorate-100 space-x-1 mt-2">
              <p>Already a user? </p>
              <a href="/login" className="hover:text-juicy-100/75 underline">LOGIN</a>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}
