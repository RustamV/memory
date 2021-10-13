import { useState } from "react";
import { config } from "../../helpers";
import styles from "./index.module.scss";
import cn from "classnames";

const { defaultFlipTime } = config;

const Cell = ({
    id,
    x,
    y,
    content,
    isActive
}: {
    id: number;
    x: number;
    y: number;
    content: string;
    isActive: boolean;
}) => {
    const [isFlipped, setIsFlipped] = useState(isActive);

    const handleCellClick = () => {
        setIsFlipped((prev) => !prev);

        if (!isActive) {
            setTimeout(() => setIsFlipped((prev) => !prev), defaultFlipTime);
        }
    };

    return (
        <div
            className={cn(styles.cell, { [styles.flipped]: isFlipped })}
            onClick={handleCellClick}>
            <div className={styles.inner}>
                <div className={styles.front}>123</div>
                <div className={styles.back}>{content}</div>
            </div>
        </div>
    );
};

export default Cell;
