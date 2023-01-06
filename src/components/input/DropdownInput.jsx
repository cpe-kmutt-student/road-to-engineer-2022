import { useState, useEffect } from 'preact/hooks'

export const Dropdown = ({ name, label, option, onChange, input, setInput }) => {
  const inner_option = Object.values(option);
  const value_option = Object.keys(option);
  const [optionsState, setOption] = useState(null);

  return (

    <>
      <div className="w-full z-20">
        <label htmlFor="dropdown" className="flex flex-col text-xl">
          {label}
        </label>
        <select
          name={name} id={name}
          onChange={(e) => {
            setOption(e.target.value);
            onChange && onChange(e);
            input && setInput({...input, [name]: e.target.value});
          }}
          value={optionsState}
          className="              
              mt-1
              w-full
              rounded-md
              border-gray-400
              shadow-sm
              focus:border-juicy-100 
              focus:ring 
              focus:ring-juicy-100 
              focus:ring-opacity-30"
          required
        >
          <option hidden value="">  </option>
          {inner_option.map((e, i) => {
            return <option value={value_option[i]} className="rounded rounded-lg w-2">{e}</option>
          })}
        </select>
      </div>
    </>
  );
}
