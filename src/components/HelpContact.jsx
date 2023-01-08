import fetch from "../utils/fetchAxios";
import { useState, useEffect } from "preact/hooks";
import { Text } from "./input/TextInput";
import { TextArea } from "./input/TextArea";
import { Button } from "./input/Button";
import contactIcon from "/image/headset-icon.svg"

export const Help = () => {
  const [helpInput, setHelpInput] = useState({
    name: '',
    contact: '',
    problem: '',
  });

  useEffect(() => {
    console.log(helpInput);
  }, [helpInput]);

  const handleChange = (e) => {
    setHelpInput({ ...helpInput, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    fetch.post('/report', helpInput)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      })
    e.preventDefault();
  }


  return (
    <>
      <label htmlFor="my-modal-6" className="toast z-50">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <div className="text-md alert shadow-lg shadow-black/50 backdrop-blur-sm bg-white/50 p-2 cursor-pointer duration-150 active:translate-y-1 active:shadow-md">
          <img src={contactIcon} alt="" className="h-6 w-6 md:h-12 md:w-12 color-green-200" />
        </div>
      </label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle z-50">
        <div className="modal-box space-y-4">
          <h3 className="font-bold text-juicy-200 text-2xl md:text-5xl">ติดต่อสอบถาม</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Text name="name" label="ชื่อผู้ใช้" onChange={handleChange} />
            <Text name="contact" label="ช่องทางการติดต่อ" onChange={handleChange} />
            <TextArea name="problem" label="ปัญหาที่พบ" onChange={handleChange} />
            <Button text="Submit" type="1" />
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn text-xl border-none bg-juicy-100 hover:bg-juicy-100 active:bg-juicy-200">close</label>
          </div>
        </div>
      </div>
    </>
  );
}
