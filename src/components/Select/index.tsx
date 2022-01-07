import { SpeedType, SizeType } from "../../helpers";
import styles from "./index.module.scss";
interface Props {
    options: SpeedType[] | SizeType[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ options, onChange }) => {
    return (
        <select onChange={onChange} className={styles.select}>
            {options.map((option) => {
                return (
                    <option key={option.id} value={option.id}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;
