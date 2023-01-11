export const Card = ({ title, children }) => {
  return (
    <div className="container mx-auto bg-white h-fit w-full mb-6 rounded-2xl p-6 md:p-10 flex flex-col shadow-lg shadow-black/50 text-gray-500">
      <div className="text-juicy-200 text-3xl lg:text-4xl font-bold tracking-wide mb-2 md:mb-5 border-b-2 border-b-juicy-200">{title}</div> 
      <div className="text-md md:text-xl">
        {children}
      </div>
    </div>
  )

}
