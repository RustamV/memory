import styles from "./index.module.scss";
import cn from "classnames";
import Example from "../../images/example.png";
const Cell = ({
    id,
    content,
    isActive,
    isOpened,
    onClick,
    speed
}: {
    id: number;
    content: string;
    isActive: boolean;
    isOpened: boolean;
    onClick: any;
    speed: any;
}) => {
    return (
        <div
            className={cn(styles.cell, {
                [styles.flipped]: isOpened || isActive
            })}
            onClick={onClick}>
            <div
                className={styles.inner}
                style={{
                    transition: `transform ${speed.value / 1000}s`
                }}>
                <img src={Example} />
                <div className={styles.front}>{content}</div>
                <div className={styles.back}>{content + content + content}</div>
            </div>
        </div>
    );
};

export default Cell;
