import React from 'react';
import styles from './Counter.module.css';

import { ReactComponent as Book } from "assets/icons/courses.svg";
import { ReactComponent as User } from "assets/icons/user.svg";

interface CounterProps {
    amount: number;
    type: "book" | "user";
}

const IconMap = {
    book: Book,
    user: User
}

const Counter: React.FC<CounterProps> = ({amount, type}) => {
    const Icon = IconMap[type]
    return <div className={styles.counter}>
        <Icon/>
        <h4>{amount}</h4>
    </div>;
};

export default Counter;
