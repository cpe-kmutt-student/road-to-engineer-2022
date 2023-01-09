export const RegisterCard = ({ title, children }) => {
    return (
        <div className="w-screen min-h-screen md:h-fit p-10 md:p-20 flex justify-center items-center">
            <div className="bg-white w-full h-fit md:h-fit p-8 md:p-10 flex flex-col rounded-xl shadow-lg shadow-black/50 text-gray-500 z-50">
                <h1 className="text-juicy-200 text-4xl lg:text-6xl font-bold tracking-wide mb-2 md:mb-5 uppercase">
                    {title}
                </h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
