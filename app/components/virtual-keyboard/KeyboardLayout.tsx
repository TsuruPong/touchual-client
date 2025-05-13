import * as React from "react";
import { type KeyConfigType, KeyConfig } from "./KeyConfig";
import Key from "../key";

import styles from "./VirtualKeyboard.module.css";

const KeyboardRow: React.FC<{
    rows: KeyConfigType[];
    isPress: (code: string) => boolean;
}> = ({ rows, isPress }) => {
    return (
        <div className={styles.virtualKeyboardRow}>
            {rows.map((k) => {
                return (
                    <Key
                        key={`key-${k.code}`}
                        size={k.size}
                        symbol={k.symbol}
                        code={k.code}
                        isPress={isPress(k.code)}
                    />
                );
            })}
        </div>
    );
};

export const KeyboardLayout: React.FC<{
    isPress: (code: string) => boolean;
}> = ({ isPress }) => {
    return (
        <div className={styles.virtualKeyboard}>
            {KeyConfig.map((k, i) => {
                return (
                    <KeyboardRow
                        key={`key-line-${i}`}
                        rows={k}
                        isPress={isPress}
                    />
                );
            })}
        </div>
    );
};
