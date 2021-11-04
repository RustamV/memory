import { SpeedType } from "../../helpers";
import Back from "../../images/back.png";
import styles from "./index.module.scss";
import cn from "classnames";

const Cell = ({
    content,
    isActive,
    isOpened,
    onClick,
    speed
}: {
    content: string;
    isActive: boolean;
    isOpened: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    speed: SpeedType;
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
                <div className={styles.front}>{""}</div>
                <div className={styles.back}>{content}</div>
            </div>
            <img src={Back} alt="" />
        </div>
    );
};

export default Cell;
