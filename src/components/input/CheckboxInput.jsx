export const Checkbox = ({ name, label, onClick, onChange }) => {
  return (
    <>
      <div className="w-full z-20">
        <div className="flex flex-row items-center space-x-2 text-xl">
          <label className="align-bottom">
            <input
              type="checkbox"
              id={name}
              name={name}
              className="
              mr-2
              form-checkbox 
              rounded
              border-gray-400
              focus:border-juicy-100 
              focus:ring 
              focus:ring-juicy-100 
              focus:ring-opacity-30
              focus:ring-offset-0
              checked:text-juicy-100"
              onClick={onClick}
              onChange={onChange}
            />
            {label}</label>
        </div>
      </div>
    </>
  );
}
