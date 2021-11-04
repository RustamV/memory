import { SpeedType, SizeType } from "../../helpers";
import styles from "./index.module.scss";

type MyOption = SpeedType | SizeType;

const Select = ({
    options,
    onChange
}: {
    options: MyOption[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
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
