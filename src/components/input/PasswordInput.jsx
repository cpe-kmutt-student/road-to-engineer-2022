export const Password = () => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="password" className="flex flex-col text-xl"> 
          Password
          <input  type="password" 
                  id="password" 
                  name="password" 
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
