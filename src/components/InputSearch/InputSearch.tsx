import React from "react";
import styles from "./InputSearch.module.css";

import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { UseControllerProps, useController } from "react-hook-form";

interface InputSearchProps extends UseControllerProps<any> {}

const InputSearch: React.FC<InputSearchProps> = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });
  //   TODO add error handling
  return (
    <div className={styles.inputContainer}>
      <input id={name} type="text" placeholder="Search..." {...field} />
      <label htmlFor={name}>
        <SearchIcon className={styles.inputIcon} />
      </label>
    </div>
  );
};

export default InputSearch;
