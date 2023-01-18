import { useEffect, useState, useRef } from "preact/hooks";
import Swal from "sweetalert2";
import { useAuth } from "../../contexts/AuthContext";
import fetch from "../../utils/fetchAxios";

const TextInput = ({
  name,
  placeholder,
  value,
  handleChange,
  disabled,
}) => {
  return (
    
    <div key={name} className="w-full z-20">
      <label className="flex flex-col text-xl">
        <input
          type="text"
          id={name}
          name={name}
          disabled={disabled}
          className={`${disabled ? 'bg-slate-200': 'bg-white'} form-input mt-1 w-full text-xl rounded-md  border-gray-400 shadow-sm focus:border-juicy-100 focus:ring focus:ring-juicy-100 focus:ring-opacity-30`}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          
        />
      </label>
    </div>
    
  );
};

const DropdownInput = ({ name, option, handleChange, value, disabled }) => {
  const inner_option = Object.values(option);
  const value_option = Object.keys(option);
  return (
    <div key={name} className="w-full z-20">
      <label className="flex text-xl">
          <select value={value} id={name} onChange={handleChange} className={`${disabled ? 'bg-slate-200': 'bg-white'} form-input mt-1 w-full text-xl rounded-md  border-gray-400 shadow-sm focus:border-juicy-100 focus:ring focus:ring-juicy-100 focus:ring-opacity-30`}>
            {inner_option.map((e, i) => {
              return (
                <option
                  value={value_option[i]}
                  className="rounded-lg w-2"
                  selected={value_option[i] && value}
                >
                  {e}
                </option>
              );
            })}
          </select>
      </label>
    </div>
  )
};


const ProfileDetail = ({ img, type, value, label, handleChange, disabled, option, state_name }) => {
  return (
    <>
      <div className="flex flex-row space-x-4 items-center">
        <div id="picture" className="flex justify-center items-center">
          {img ? <img src={img} alt="" className="h-8 w-8 md:h-12 md:w-12" /> : <div className="h-8 w-8 md:h-12 md:w-12" />}
        </div>
        <div className="flex flex-col text-juicy-200 w-full">
          <h2 className="font-bold text-lg md:text-3xl">{label}</h2>
          {type == 1 ? <DropdownInput option={option} name={state_name} value={value} disabled={disabled} handleChange={handleChange}/> : <TextInput name={state_name ? state_name : label.toLowerCase()} value={value} disabled={disabled} handleChange={handleChange}/>}
        </div>
      </div>
    </>
  );
};

const NameDetail = ({ img, label, firstname, lastname, handleChange }) => {
  return (
    <>
      <div className="flex flex-row space-x-4 items-center">
        <div id="picture" className="flex justify-center items-center">
          <img src={img} alt="" className="h-8 w-8 md:h-12 md:w-12" />
        </div>
        <div className="flex flex-col text-juicy-200 w-full">
          <h2 className="font-bold text-lg md:text-3xl">{label}</h2>
          <TextInput name="firstname" value={firstname} handleChange={handleChange}/>
          <TextInput name="lastname" value={lastname} handleChange={handleChange}/>
        </div>
      </div>
    </>
  );
};

export const EditProfileModal = ({ user }) => {
  const { logout } = useAuth();
  const [input, setInput] = useState({
    ...user, 
    firstname: user.name.split(' ')[0],
    lastname: user.name.split(' ')[1],
  });
  const modalRef = useRef();

  const handleChange = async (e) => {
    const newState = { ...input, [e.target.id]: e.target.value }
    setInput(newState);
  };

  const handleSubmit = () => {
    if(input.firstname.length && input.lastname.length && input.phone.length)
    fetch.post('/edit_account',input).then((res) => {
      if (res.status == 200){
        Swal.fire({
          title:"แก้ไขสำเร็จ",
          html:"กรุณาเข้าสู่ระบบอีกครั้ง",
          icon:'success',
          timer: 1000,
          showConfirmButton: false
        }).then(()=> {
          logout()
        })
      }
    })
  };

  const handleReset = () => {
    setInput({
      ...user,
      firstname: user.name.split(' ')[0],
      lastname: user.name.split(' ')[1],
    });
  };

  const handleClose = () => {
    document.getElementById("my-modal-4").checked = false;
    handleReset();
  };

  const studentGrade = {
    "MiddleSchool": "มัธยมศึกษาตอนต้น (ม.1-3)",
    "HighSchool": "มัธยมศึกษาตอนปลาย (ม.4-6)",
    "Vocational": "ประกาศนียบัตรวิชาชีพ (ปวช.)",
    "HighVocational": "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
    "University": "มหาวิทยาลัย",
  }


  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4">
        <img src="/image/edit.svg" alt="edit" />
      </label>

      <input ref={modalRef} type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label key="modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <div className="text-juicy-200 text-3xl lg:text-4xl font-bold tracking-wide mb-2 md:mb-5 border-b-2 border-b-juicy-200 flex justify-between">
            <h1>Edit Account</h1><div className="cursor-pointer" onClick={()=>handleClose()}>X</div>
          </div>

          <div className="space-y-2 m-5">
            <NameDetail key="namedetail" label="Name" img="/image/person.svg" firstname={input.firstname} lastname={input.lastname} handleChange={handleChange}/>
            <ProfileDetail key="maildetail" label="Email" img="/image/mail.svg" disabled={true} value={input.email} handleChange={handleChange}/>
            <ProfileDetail key="phonedetail" label="Phone" img="/image/phone.svg" value={input.phone} handleChange={handleChange}/>
            {user.accountType == "students" && <>
            <ProfileDetail option={studentGrade} type={1} key="educationlevel" label="Education Level" state_name={"educationLevel"} value={input.educationLevel} handleChange={handleChange}/>
            <ProfileDetail key="schoolname" label="School" state_name="schoolName"  value={input.schoolName} handleChange={handleChange}/>
            </> }
          </div>
          <div className="text-xl text-center">เมื่อกดยืนยันแล้วกรุณาเข้าระบบอีกครั้ง</div>
          <div className="flex w-full gap-x-6 ">
            <button
              className="w-full text-white shadow-lg shadow-black/25 font-bold text-lg md:text-3xl bg-juicy-100 rounded-xl py-0.5"
              onClick={() => {handleSubmit()}}
            >
              Confirm
            </button>
            <button className="w-full text-white shadow-lg shadow-black/25 font-bold text-lg md:text-3xl bg-juicy-100 rounded-xl py-0.5"
            onClick={()=> {handleReset()}}
            >
              Reset
            </button>
          </div>
        </label>
      </label>
    </>
  );
};
