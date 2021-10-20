import { default as ReactSelect } from "react-select";

const Select = ({
    className,
    components,
    options,
    onChange,
    defaultValue,
    value,
    ...props
}: {
    className?: string;
    components?: [];
    options: any;
    defaultValue: any;
    onChange: any;
    value: any;
}) => {
    return (
        <ReactSelect
            defaultValue={defaultValue}
            onChange={onChange}
            value={value}
            options={options}
            isSearchable={false}
            className={className}
            classNamePrefix="select"
            components={{
                IndicatorSeparator: () => null,
                ...components
            }}
            {...props}
        />
    );
};

export default Select;
