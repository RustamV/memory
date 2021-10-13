import { useState } from "react";
import { Cell } from "..";
import styles from "./index.module.scss";
import { config } from "../../helpers";

const Grid = () => {
    const initializeGrid = () => {
        const { defaultGridSize: dgs } = config;
        let tempGrid = [];
        let contentArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
        let content = shuffle([...contentArray, ...contentArray]);

        for (let column = 0; column < dgs; column++) {
            for (let row = 0; row < dgs; row++) {
                tempGrid.push({
                    id: column * dgs + row,
                    x: row,
                    y: column,
                    content: content[column * dgs + row],
                    isActive: false
                });
            }
        }

        return tempGrid;
    };

    const shuffle = (o: string[]) => {
        for (
            var j, x, i = o.length;
            i;
            j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        );
        return o;
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
