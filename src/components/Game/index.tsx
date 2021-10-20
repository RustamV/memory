import { useState } from "react";
import { Grid, Timer } from "../index";
import styles from "./index.module.scss";
import cn from "classnames";

const Game = ({}: {}) => {
    const [time, setTime] = useState<number>(0);
    const [movesCount, setMovesCount] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>("not-started");

    const handleStartButton = () => {
        setTime(0);
        setMovesCount(0);
        setGameStatus("not-started");
    };

    return (
        <div className={styles.game}>
            <Grid setMovesCount={setMovesCount} gameStatus={gameStatus} setGameStatus={setGameStatus} />
            <Timer time={time} setTime={setTime} gameStatus={gameStatus} />
            <div>{movesCount}</div>
            <button onClick={handleStartButton}>start</button>
        </div>
    );
};

export default Game;
