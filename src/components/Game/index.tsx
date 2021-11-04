import { useEffect, useState } from "react";
import { Grid, Timer, Select } from "../index";
import { config, SpeedType, SizeType } from "../../helpers";
import Modal from "react-modal";
import styles from "./index.module.scss";

const { sizeOptions, speedOptions } = config;

const Game = () => {
    const [size, setSize] = useState<SizeType>(sizeOptions[0]);
    const [speed, setSpeed] = useState<SpeedType>(speedOptions[0]);
    const [movesCount, setMovesCount] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>("not-started");
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        if (gameStatus === "stopped") {
            setModalVisible(true);
        }
    }, [gameStatus]);

    const startGame = () => {
        setMovesCount(0);
        setGameStatus("not-started");
    };

    const onChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOption: SizeType = sizeOptions.find((item) => item.id === +event.target.value) ?? sizeOptions[0];
        setSize(newOption);
    };

    const onChangeSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOption: SpeedType = speedOptions.find((item) => item.id === +event.target.value) ?? speedOptions[0];
        setSpeed(newOption);
    };

    const onModalClose = () => {
        setModalVisible(false);
    };

    return (
        <div className={styles.game}>
            <div className={styles.sider}>
                <div className={styles.moves}>
                    <span>Moves:</span>
                    <span>{movesCount}</span>
                </div>
                <Timer gameStatus={gameStatus} />
                <div className={styles.size}>
                    <span>Size:</span>
                    <Select options={sizeOptions} onChange={onChangeSize} />
                </div>
                <div className={styles.speed}>
                    <span>Speed:</span>
                    <Select options={speedOptions} onChange={onChangeSpeed} />
                </div>
                <button onClick={startGame} className={styles.startButton}>
                    start
                </button>
            </div>
            <Grid
                setMovesCount={setMovesCount}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                size={size}
                speed={speed}
                startGame={startGame}
            />
            <Modal
                isOpen={modalVisible}
                onRequestClose={onModalClose}
                className={styles.modal}
                overlayClassName={styles.overlay}>
                <div className={styles.header}>
                    <h2>Congratulations!</h2>
                    <div onClick={onModalClose}>X</div>
                </div>
                <div className={styles.content}>
                    <span>Your result:</span>
                    <span>{movesCount}</span>
                </div>
            </Modal>
        </div>
    );
};

export default Game;
