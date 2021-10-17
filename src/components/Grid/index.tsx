import { useState } from "react";
import { Cell } from "..";
import { config, shuffleArray } from "../../helpers";
import styles from "./index.module.scss";

const { defaultFlipTime, defaultGridSize: dgs } = config;

const Grid = () => {
    const initializeGrid = () => {
        let tempGrid = [];
        let contentArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
        let content = shuffleArray([...contentArray, ...contentArray]);

        for (let column = 0; column < dgs; column++) {
            for (let row = 0; row < dgs; row++) {
                let id = column * dgs + row;
                tempGrid.push({
                    id,
                    content: content[id],
                    isActive: false,
                    isOpened: false
                });
            }
        }

        return tempGrid;
    };

    const [grid, setGrid] = useState(initializeGrid());
    const [checkedCells, setCheckedCells] = useState<number[]>([]);
    const [movesCount, setMovesCount] = useState<number>(0);

    const getCellById = (id: number) => {
        return grid.find((cell) => cell.id === id);
    };

    const startTimer = () => {
        if (checkedCells.length === 1) {
            setMovesCount((prev) => prev + 1);
            setTimeout(() => {
                setCheckedCells([]);
                setGrid((prev) =>
                    prev.map((cell) => {
                        if (cell.isActive) {
                            return { ...cell, isActive: false };
                        }
                        return cell;
                    })
                );
            }, defaultFlipTime);
        }
    };

    const handleCellClick = (id: number) => {
        startTimer();
        if (checkedCells.length < 2) {
            setCheckedCells((prev) => [...prev, id]);
            setGrid((prev) =>
                prev.map((cell) => {
                    if (id === cell.id || checkedCells[0] === cell.id) {
                        if (checkedCells.length === 1 && isCellsMatching([...checkedCells, id])) {
                            return { ...cell, isOpened: true };
                        } else return { ...cell, isActive: true };
                    }
                    return cell;
                })
            );
        }
    };

    const isCellsMatching = (cells: number[]) => {
        if (cells.length === 2) {
            let firstCell = getCellById(cells[0]);
            let secondCell = getCellById(cells[1]);

            if (firstCell && secondCell) {
                return firstCell.content === secondCell.content;
            }
        }
        return false;
    };

    return (
        <div>
            <div className={styles.grid}>
                {grid.map((cell) => (
                    <Cell key={cell.id} {...cell} onClick={() => handleCellClick(cell.id)} />
                ))}
            </div>
            <div>{movesCount}</div>
        </div>
    );
};

export default Grid;
