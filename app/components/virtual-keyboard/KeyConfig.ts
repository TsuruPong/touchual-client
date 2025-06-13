import { KeyKind, type KeyKindType } from "../key/kind"

const makeKey = (symbol: string, code: string, size: KeyKindType = KeyKind.STANDARD) => ({
    symbol, code, size
});

const row1 = [
    makeKey("", "Escape"),
    ...["1","2","3","4","5","6","7","8","9","0"].map((s, i) => 
        makeKey("", `Digit${i + 1}`)
    ),
    makeKey("", "Minus"),
    makeKey("", "Equal"),
    makeKey("", "Backspace", KeyKind.BIG)    
];

const row2 = [
    makeKey("", "Tab", KeyKind.LARGE),
    ...["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((s) =>
        makeKey(s, `Key${s}`)
    ),
    makeKey("", "BracketLeft"),
    makeKey("", "BracketRight"),
    makeKey("", "Backslash", KeyKind.LARGE)
];

const row3 = [
    makeKey("", "CapsLock", KeyKind.BIG),
    ...["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((s) =>
        makeKey(s, `Key${s}`)
    ),
    makeKey("", "Semicolon"),
    makeKey("", "Quote"),
    makeKey("", "Enter", KeyKind.BIG)
];

const row4 = [
    makeKey("", "ShiftLeft", KeyKind.HUGE),
    ...["Z", "X", "C", "V", "B", "N", "M"].map((s) =>
        makeKey(s, `Key${s}`)
    ),
    makeKey("", "Comma"),
    makeKey("", "Period"),
    makeKey("", "Slash"),
    makeKey("", "ShiftRight", KeyKind.HUGE)
];

const row5 = [
    makeKey("", "ControlLeft", KeyKind.REGULAR),
    makeKey("", "MetaLeft", KeyKind.REGULAR),
    makeKey("", "AltLeft", KeyKind.REGULAR),
    makeKey("", "Space", KeyKind.SPACE),
    makeKey("", "AltRight", KeyKind.REGULAR),
    makeKey("", "MetaRight", KeyKind.REGULAR),
    makeKey("", "Menu", KeyKind.REGULAR),
    makeKey("", "ControlRight", KeyKind.REGULAR)
];

export type KeyConfigType = {
    symbol: string,
    size: KeyKindType,
    code: string
}

export const KeyConfig: KeyConfigType [][] = [
    row1,
    row2,
    row3,
    row4,
    row5
];