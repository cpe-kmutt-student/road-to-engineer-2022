export const Button = ({logo, text, type, onClick}) => {
  type -= 1;
  const styles = [
    ` bg-juicy-100 
      p-2 w-full 
      rounded-md 
      text-xl 
      font-bold
      text-white
      border-8
      border-juicy-100
      shadow-md
      tracking-wide
      active:shadow-inner
      active:shadow-black/75
      active:bg-juicy-200
      ease-in-out
      duration-200 `,
    ` bg-gray-200
      p-2 w-full 
      rounded-md 
      text-xl 
      text-gray-700
      font-bold
      border-8
      border-juicy-100/0
      shadow-md
      tracking-wide
      active:shadow-inner
      active:shadow-black/75
      active:bg-gray-300
      ease-in-out
      duration-200 `
  ]
  return (
    <>
      <div className="w-full z-20">
        <button 
          className={styles[type] + "flex justify-center items-center space-x-2"}
          onClick={onClick}
        >
          {logo ? <img src={logo} alt="" className="h-8" /> : <></>}
          <span>{text}</span>
        </button>
      </div>
    </>
  );
}
