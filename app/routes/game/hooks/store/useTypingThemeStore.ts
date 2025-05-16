import { create } from "zustand"; 
import type { MoraWithStatus } from "~/types/extends/manimani";

type TypingThemeStore = {
    id: number;
    text: string;
    ruby: string;
    moras: MoraWithStatus[];
    updateStates: (next: Partial<TypingThemeStore>) => void;
    reset: () => void;
}

const initialState: Omit<TypingThemeStore, "updateStates" | "reset"> = {
    id: 0,
    text: "",
    ruby: "",
    moras: [],
};

export const useTypingThemeStore = create<TypingThemeStore>((set) => ({
    ...initialState,
    updateStates: (next) => set((prev) => ({ ...prev, ...next })),
    reset: () => set(initialState)
}))