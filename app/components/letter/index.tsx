import * as React from "react";
import type { LetterKind } from "./LetterKind";
import { TextEn } from "../typography";

import styles from "./Letter.module.css";

export const Letter: React.FC<{
    letter: string;
    kind: LetterKind;
}> = ({ letter, kind }) => {
    return (
        <TextEn className={`${styles.letter} ${styles[kind]}`}>{letter}</TextEn>
    );
};
