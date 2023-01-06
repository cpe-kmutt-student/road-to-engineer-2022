export const Text = ({name, label, onChange, input, setInput}) => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor={name} className="flex flex-col text-xl"> 
          {label}
          <input  
            type="text" 
            id={name} 
            name={name}
            onChange={(e)=>{
              onChange && onChange(e);
              input && setInput({...input, [name]: e.target.value});  
            }}
            className="
              form-input
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
          />
        </label>
      </div>
    </>
  );
}
