import { useMemo, useState, useEffect } from "preact/hooks";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const CountDown = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(null);

  useEffect(() => {
    // set coutdown if deadline is not late
    if (parsedDeadline - Date.now() > 0) setTime(parsedDeadline - Date.now());
    //setInterval  if deadline set coutdown if not set to null
    const interval = setInterval(
      () =>
        parsedDeadline - Date.now() > 0
          ? setTime(parsedDeadline - Date.now())
          : setTime(null),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="flex flex-row justify-center items-center max-w-[100vw]">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div key={label} className="flex flex-col justify-center items-center px-3 max-w-[22vw] text-center">
          {/* Time */}
          <div className="flex justify-center items-center mb-2 text-black font-extrabold bg-white aspect-square w-[4.4rem] h-[4.4rem] text-4xl rounded-3xl">
            <p className="">
              {`${Math.floor(value)}`.padStart(2, "0")}
            </p>
          </div>
          {/* Label Days/Hours */}
          <span className="text-white text-xl sm:text-2xl text-center">{label.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};
