export const Checkbox = () => {
  return (
    <>
      <div className="w-full z-20">
        <div className="flex flex-row items-center space-x-2 text-xl"> 
          <input 
            type="checkbox" 
            id="checkbox" 
            name="checkbox" 
            className="
              form-checkbox 
              rounded
              border-gray-400
              focus:border-juicy-100 
              focus:ring 
              focus:ring-juicy-100 
              focus:ring-opacity-30
              focus:ring-offset-0
              checked:text-juicy-100" 
          />
          <label className="align-bottom">Remember Me ?</label>
        </div>
      </div>
    </>
  );
}
