import React from "react";
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
export const CountDown = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = React.useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = React.useState(parsedDeadline - Date.now());

  React.useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="flex flex-row justify-center items-center">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="">
          <div className="box px-3 text-center text-3xl ">
            {/* Time */}
            <p className="p-6 mb-2 text-black font-extrabold bg-white w-28 rounded-3xl">
              {`${Math.floor(value)}`.padStart(2, "0")}
            </p>
            {/* Label Days/Hours */}
            <span className="text-white">{label.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
