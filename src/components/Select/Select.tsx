import React from "react";
import styles from "./Select.module.css";

import { ReactComponent as ArrowIcon } from "assets/icons/arrowDown.svg";
import { UseControllerProps, useController } from "react-hook-form";

interface SelectProps extends UseControllerProps<any> {
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  name,
  options,
  control,
  defaultValue,
  rules,
  shouldUnregister,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <div className={styles.customSelect}>
      <span>{field.value}</span>
      <ArrowIcon />
      <select {...field}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
