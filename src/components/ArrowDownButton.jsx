export const ArrowDownButton = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="animate-bounce flex flex-col items-center cursor-pointer w-fit px-6 py-1 z-1 rounded-full font-bold text-3xl text-center text-white bg-black"
    >
      {label}
      <img src="/assets/downarrow.svg" className="p-1" />
    </div>
  );
};
