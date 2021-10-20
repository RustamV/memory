import { useState, useEffect } from "react";
// import { useAppContext } from "../../helpers/functions/context";
// import "./index.scss";

const Timer = ({ time, setTime, gameStatus }: { time: number; setTime: any; gameStatus: string }) => {
    const [date, setDate] = useState(new Date());
    // const { imageTheme } = useAppContext();

    const tick = () => {
        if (gameStatus === "started") {
            setTime((prev: number) => ++prev);
        }
        setDate(new Date());
    };

    useEffect(() => {
        const timerID = setTimeout(() => tick(), 1000);

        return () => {
            clearTimeout(timerID);
        };
    }, [date, gameStatus]);

    useEffect(() => {
        if (gameStatus === "started" || gameStatus === "not-started") {
            setTime(0);
        }
    }, [gameStatus]);

    return <div className="time-counter">{time}</div>;
};

export default Timer;
