export const Dropdown = ({ label }) => {
  const list = ['Apple', 'Banana', 'Orange'];
  return (
    <>
      <div className="w-full z-20">
        <label htmlFor="dropdown" className="flex flex-col text-xl">
          {label}
        </label>
        <select 
            name={label} id={label} 
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
        >
          {list.map((e)=>{
            return <option value={e} className="rounded rounded-lg w-2">{e}</option>
          })}
        </select>
      </div>
    </>
  );
}
