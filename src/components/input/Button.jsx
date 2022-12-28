export const Button = ({text, type}) => {
  type -= 1;
  const styles = [
    ` bg-juicy-100 
      p-2 w-full 
      rounded-md 
      text-xl 
      font-bold
      text-white
      shadow-md
      tracking-wide
      hover:scale-105
      ease-out 
      duration-200 `,
    ` bg-juicy-100/25 
      p-2 w-full 
      rounded-md 
      text-xl 
      font-bold
      text-juicy-100
      shadow-md
      tracking-wide
      hover:scale-105
      ease-out 
      duration-200 `
  ]
  return (
    <>
      <div className="w-full z-20">
        <button 
          className={styles[type]}
        >
          {text}
        </button>
      </div>
    </>
  );
}
