import * as React from "react";
import { Letter } from "../letter";
import type { LetterKind } from "../letter/LetterKind";

export type AutoCompleateType = {
    char: string;
    kind: LetterKind;
};

export const AutoCompleate: React.FC<{
    autocompleates: AutoCompleateType[];
}> = ({ autocompleates }) => {
    return autocompleates.map((a, i) => (
        <Letter key={i} letter={a.char} kind={a.kind} />
    ));
};
