import type { MoraWithStatus } from "~/types/extends/manimani";

type TypingTheme = {
    id: number;
    text: string;
    ruby: string;
    moras: MoraWithStatus[];
}

export const useTypingTheme = () => {
    const fetchTypingTheme = async(level: number, difficulty: number, id?: number) => {
        return null;
    }

    return { fetchTypingTheme }
}