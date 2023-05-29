import React from "react";
import styles from "./InputSearch.module.css";

import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

interface InputSearchProps {}

const InputSearch: React.FC<InputSearchProps> = () => {
  return (
    <div className={styles.inputContainer}>
      <input id="searchInput" type="text" placeholder="Search..." />
      <label htmlFor="searchInput">
        <SearchIcon className={styles.inputIcon} />
      </label>
    </div>
  );
};

export default InputSearch;
