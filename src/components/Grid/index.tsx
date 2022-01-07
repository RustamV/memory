import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Cell } from "..";
import { config, shuffleArray, SpeedType, SizeType } from "../../helpers";
import styles from "./index.module.scss";

const { content } = config;

interface Props {
    setMovesCount: Dispatch<SetStateAction<number>>;
    gameStatus: string;
    setGameStatus: Dispatch<SetStateAction<string>>;
    size: SizeType;
    speed: SpeedType;
    startGame: () => void;
}

const Grid: React.FC<Props> = ({ setMovesCount, gameStatus, setGameStatus, size, speed, startGame }) => {
    const {
        value: { width, height }
    } = size;

    const fillContentArray = () => {
        const contentArray = [...content].splice(0, (width * height) / 2);
        return shuffleArray([...contentArray, ...contentArray]);
    };

    const initializeGrid = () => {
        const tempGrid = [];
        const preparedContent = fillContentArray();

        for (let column = 0; column < width; column++) {
            for (let row = 0; row < height; row++) {
                let id = column * height + row;
                tempGrid.push({
                    id,
                    content: preparedContent[id],
                    isActive: false,
                    isOpened: false
                });
            }
        }

        return tempGrid;
    };

    const [grid, setGrid] = useState(initializeGrid());
    const [checkedCells, setCheckedCells] = useState<number[]>([]);
    const [openedCellsCount, setOpenedCellsCount] = useState<number>(0);

    const startNewGame = () => {
        startGame();
        setGrid(initializeGrid());
        setCheckedCells([]);
        setOpenedCellsCount(0);
    };

    useEffect(() => {
        if (gameStatus === "not-started") {
            startNewGame();
        }
        // eslint-disable-next-line
    }, [gameStatus]);

    useEffect(() => {
        startNewGame();
        // eslint-disable-next-line
    }, [size, speed]);

    const getCellById = (id: number) => {
        return grid.find((cell) => cell.id === id);
    };

    useEffect(() => {
        if (openedCellsCount / 2 === width * height) {
            setGameStatus("stopped");
        }
        // eslint-disable-next-line
    }, [openedCellsCount]);

    const refreshGrid = () => {
        setCheckedCells([]);
        setGrid((prev) =>
            prev.map((cell) => {
                if (cell.isActive) {
                    return { ...cell, isActive: false };
                }
                return cell;
            })
        );
    };

    const startTimer = () => {
        if (checkedCells.length === 1) {
            setMovesCount((prev: number) => prev + 1);
            setTimeout(() => {
                refreshGrid();
            }, speed.value);
        }
    };

    const handleCellClick = (id: number) => {
        if (gameStatus === "not-started") {
            setGameStatus("started");
        }
        startTimer();
        if (checkedCells.length < 2) {
            if (checkedCells.length === 1 && checkedCells[0] === id) {
                refreshGrid();
            } else {
                setCheckedCells((prev) => [...prev, id]);
                setGrid((prev) =>
                    prev.map((cell) => {
                        if (id === cell.id || checkedCells[0] === cell.id) {
                            if (checkedCells.length === 1 && isCellsMatching([...checkedCells, id])) {
                                setOpenedCellsCount((prev: number) => ++prev);
                                return { ...cell, isOpened: true };
                            } else return { ...cell, isActive: true };
                        }
                        return cell;
                    })
                );
            }
        }
    };

    const isCellsMatching = (cells: number[]) => {
        if (cells.length === 2) {
            const firstCell = getCellById(cells[0]);
            const secondCell = getCellById(cells[1]);

            if (firstCell && secondCell) {
                return firstCell.content === secondCell.content;
            }
        }
        return false;
    };

    return (
        <div
            className={styles.grid}
            style={{
                gridTemplateColumns: `repeat(${width}, minmax(40px, 100px))`
            }}>
            {grid.map((cell) => (
                <Cell key={cell.id} {...cell} onClick={() => handleCellClick(cell.id)} />
            ))}
        </div>
    );
};

export default Grid;
