import Back from "../../images/back.png";
import styles from "./index.module.scss";
import cn from "classnames";

interface Props {
    content: string;
    isActive: boolean;
    isOpened: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Cell: React.FC<Props> = ({ content, isActive, isOpened, onClick }) => {
    return (
        <div
            className={cn(styles.cell, {
                [styles.flipped]: isOpened || isActive
            })}
            onClick={onClick}>
            <div className={styles.inner}>
                <div className={styles.front}>{""}</div>
                <div className={styles.back}>{content}</div>
            </div>
            <img src={Back} alt="" />
        </div>
    );
};

export default Cell;
