export const Text = ({ name, label, onChange, input, setInput, value }) => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor={name} className="flex flex-col text-xl">
          <span>
            {label} <span className='text-bloodred-100'>*</span>
          </span>
          <input
            type="text"
            id={name}
            name={name}
            onChange={(e) => {
              onChange && onChange(e);
              input && setInput({ ...input, [name]: e.target.value });
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
            value={value}
            required
          />
        </label>
      </div>
    </>
  );
}
