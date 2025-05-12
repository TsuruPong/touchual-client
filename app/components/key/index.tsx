import * as React from "react";

import { TextEn } from "../typography";

import styles from "./Key.module.css";

const Key: React.FC<{
    size: "standard" | "regular" | "large" | "big" | "huge" | "space";
    symbol: string;
    code: string;
    isPress: boolean;
}> = ({ size, symbol, code, isPress }) => {
    return (
        <div
            id={`code-${code}`}
            className={`
                ${styles.key}
                ${styles[`${size}Key`]}
                ${isPress && styles.keyActive}
            `}
        >
            <TextEn>{symbol}</TextEn>
        </div>
    );
};

export default Key;
