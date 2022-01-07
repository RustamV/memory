import { useState, useEffect } from "react";
import styles from "./index.module.scss";

interface Props {
    gameStatus: string;
}

const Timer: React.FC<Props> = ({ gameStatus }) => {
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

    return (
        <div className={styles.timer}>
            <span>Timer:</span>
            <span>{time}</span>
        </div>
    );
};

export default Timer;
