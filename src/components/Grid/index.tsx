import { useState } from "react";
import { Cell } from "..";
import styles from "./index.module.scss";
import { config } from "../../helpers";

const Grid = () => {
    const initializeGrid = () => {
        const { defaultGridSize: dgs } = config;
        let tempGrid = [];

        for (let column = 0; column < dgs; column++) {
            for (let row = 0; row < dgs; row++) {
                tempGrid.push({
                    id: column * dgs + row,
                    x: row,
                    y: column,
                    content: "@"
                });
            }
        }

        return tempGrid;
    };

    const [grid, setGrid] = useState(initializeGrid());

    return (
        <div className={styles.grid}>
            {grid.map((cell) => (
                <Cell key={cell.id} {...cell} />
            ))}
        </div>
    );
};

export default Grid;
