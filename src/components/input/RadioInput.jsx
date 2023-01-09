export const Radio = ({ group ,name, label, checked }) => {
  return (
    <>
      <div className="w-fit z-20">
        <div className="flex flex-row items-center text-xl">
          <input
            type="radio"
            id={name}
            name={group}
            value={name}
            className="
              mr-2
              border-gray-400
              border-gray-400
              focus:border-juicy-100 
              focus:ring 
              focus:ring-juicy-100 
              focus:ring-opacity-30
              focus:ring-offset-0
              checked:text-juicy-100"
            required
            checked={checked}
          />
          <label className="align-bottom" htmlFor={name}>{label}</label>
        </div>
      </div>
    </>
  );
}
