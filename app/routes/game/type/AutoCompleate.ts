import type { LetterKind } from "~/components/letter/LetterKind";

export interface AutoCompleate {
    char: string;
    kind: LetterKind;
}