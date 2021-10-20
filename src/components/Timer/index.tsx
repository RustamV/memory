import { useState, useEffect } from "react";

const Timer = ({ gameStatus }: { gameStatus: string }) => {
    const [time, setTime] = useState<number>(0);
    const [date, setDate] = useState(new Date());

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
        // eslint-disable-next-line
    }, [date, gameStatus]);

    useEffect(() => {
        if (gameStatus === "started" || gameStatus === "not-started") {
            setTime(0);
        }
    }, [gameStatus]);

    return <div className="time-counter">{time}</div>;
};

export default Timer;
