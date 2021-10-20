import { useState } from "react";
import { Grid, Timer, Select } from "../index";
import { config } from "../../helpers";
import styles from "./index.module.scss";

const { sizeOptions, speedOptions } = config;

const Game = () => {
    const [size, setSize] = useState<any>(sizeOptions[0]);
    const [speed, setSpeed] = useState<any>(speedOptions[0]);
    const [movesCount, setMovesCount] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>("not-started");

    const startGame = () => {
        setMovesCount(0);
        setGameStatus("not-started");
    };

    const onChangeSize = (option: any) => {
        setSize(option);
    };

    const onChangeSpeed = (option: any) => {
        setSpeed(option);
    };

    return (
        <div className={styles.game}>
            <Grid
                setMovesCount={setMovesCount}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                size={size}
                speed={speed}
                startGame={startGame}
            />
            <div>
                Timer: <Timer gameStatus={gameStatus} />
            </div>
            <div>movesCount: {movesCount}</div>
            <Select options={sizeOptions} onChange={onChangeSize} defaultValue={size} value={size} />
            <Select options={speedOptions} onChange={onChangeSpeed} defaultValue={speed} value={speed} />
            <button onClick={startGame}>start</button>
        </div>
    );
};

export default Game;
