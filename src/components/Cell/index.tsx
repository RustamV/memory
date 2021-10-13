import styles from "./index.module.scss";

const Cell = ({
    id,
    x,
    y,
    content
}: {
    id: number;
    x: number;
    y: number;
    content: string;
}) => {
    return <div className={styles.cell}>{content}</div>;
};

export default Cell;
