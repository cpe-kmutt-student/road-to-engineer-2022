// import { useState } from 'preact/hooks';

export const Email = () => {
  // const emailil = useState(0);
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="email" className="flex flex-col text-xl"> 
          Email
          <input  
            type="email" 
            id="email" 
            name="email" 
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
