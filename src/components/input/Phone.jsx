export const Phone = ({ onChange }) => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="phone" className="flex flex-col text-xl"> 
          Phone Number
          <input  
            type="tel" 
            id="phone" 
            name="phone"
            onChange={onChange} 
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
