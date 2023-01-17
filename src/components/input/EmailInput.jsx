export const Email = ({ onChange, value }) => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="email" className="flex flex-col text-xl"> 
           <span>
            Email <span className='text-bloodred-100'>*</span>
           </span>
          <input  
            type="email" 
            id="email" 
            name="email" 
            onChange={onChange}
            value={value}
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
