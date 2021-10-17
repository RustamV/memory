import styles from "./index.module.scss";
import cn from "classnames";

const Cell = ({
    id,
    content,
    isActive,
    isOpened,
    onClick
}: {
    id: number;
    content: string;
    isActive: boolean;
    isOpened: boolean;
    onClick: any;
}) => {
    return (
        <div
            className={cn(styles.cell, {
                [styles.flipped]: isOpened || isActive
            })}
            onClick={onClick}>
            <div className={styles.inner}>
                <div className={styles.front}>{content}</div>
                <div className={styles.back}>{content + content + content}</div>
            </div>
        </div>
    );
};

export default Cell;
