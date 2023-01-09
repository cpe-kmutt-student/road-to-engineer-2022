export const Password = ({ type, onChange, value }) => {
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="password" className="flex flex-col text-xl"> 
          { type == "confirm" ? <>Confirm Password</> : <>Password</> }
          <input  type="password" 
                  id={ type == "confirm" ? "passwordConfirmation" : "password"} 
                  name="password" 
                  onChange={onChange}
                  autoComplete="true"
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
