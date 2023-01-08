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
import { useNavigate } from "react-router-dom";
// import { async } from "postcss-js";

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
          name="educationLevel" label="ระดับการศึกษา" option={studentGrade} input={input} setInput={setInput}
        />
        <Text name="schoolName" label="ชื่อสถานศึกษา" input={input} setInput={setInput} />
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
  const navigate = useNavigate();

  const [isStudent, setIsStudent] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  // const [status, setStatus] = useState(null);

  // const modalRef = useRef(null);

  // const showModal = () => {
  //   const nowRef = ref.current
  //   console.log(nowRef);
  //   nowRef.click();
  // }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    fetch.post('/register/create', input)
      .then((res) => {
        console.log(res);
        navigate('/login');

      })
      .catch((error) => {
        console.error(error);
      })
    e.preventDefault();
  }

  // const modalPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(status);
  //   }, 300);
  // });
  

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
      // modalPromise.then(()=>{

        setIsConfirming(true);
        setIsInvalid(false);
      // })
    }

    else
      setIsInvalid(true);
  }

  return (
    <>
      <div className="w-screen min-h-screen md:h-fit p-10 md:p-20 flex justify-center items-center">

        <div className="bg-white w-full h-fit md:h-fit p-8 md:p-10 flex flex-col rounded-xl shadow-lg shadow-black/50 text-gray-500 z-50">

          <h1 className="text-juicy-200 text-4xl lg:text-6xl font-bold tracking-wide mb-2 md:mb-5 uppercase">
            {!isConfirming ? "Sign Up" : "นโยบายข้อมูลส่วนบุคคล"}
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isConfirming && <>
              <div className="space-y-2">
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Text name="firstname" label="ชื่อ" onChange={handleChange} />
                  <Text name="lastname" label="นามสกุล" onChange={handleChange} />
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Email onChange={handleChange} />
                  <Phone onChange={handleChange} />
                </div>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
                  <Password type="normal" onChange={handleChange} />
                  <Password type="confirm" onChange={handleChange} />
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
                  <Radio name="Student" label="นักเรียน/นักศึกษา" group="accountType" />
                  <Radio name="Parent" label="ผู้ปกครอง" group="accountType" />
                  <Radio name="Teacher" label="ครู-อาจารย์" group="accountType" />
                  <Radio name="Other" label="บุคคลทั่วไป" group="accountType" />
                </div>
              </div>
              {isStudent && <StudentRegister handleChange={handleChange} input={input} setInput={setInput} />}
              <div className="md:h-6" />
              {isInvalid && <p className="text-red-500 text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</p>}
              <Button text="Sign Up" type="1" onClick={handleSignUpButton} />

              {/* The button to open modal */}
              {/* <label htmlFor="my-modal-4" className="btn" ref={modalRef}>open modal</label> */}

              {/* Put this part before </body> tag */}
              {/* <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </label>
              </label> */}

            </>}
            {isConfirming && <>
              <DataPolicy />
              <div className="flex justify-center gap-16">
                <Button text="ยอมรับ" type="1" onClick={handleSubmit} href="#" />
                <Button text="ยกเลิก" type="1" onClick={() => setIsConfirming(false)} />
              </div>
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
