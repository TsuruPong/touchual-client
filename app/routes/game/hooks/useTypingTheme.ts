import * as React from 'react';
import { create } from "zustand"; 
import type { MoraWithStatus } from "~/types/extends/manimani"
import { useTypingCounter } from './useTypingCounter';
import { useIndicator } from './useIndicator';
import { useGameTimer } from './useGameTimer';
import { useFetchTypingTheme } from './useFetchTypingTheme';

type TypingThemeStore = {
    id: number;
    level: number;
    difficult: number;
    text: string;
    ruby: string;
    moras: MoraWithStatus[];
    updateStates: (next: Partial<TypingThemeStore>) => void;
    reset: () => void;
}

const initialState: Omit<TypingThemeStore, "updateStates" | "reset"> = {
    id: 0,
    level: 0,
    difficult: 0,
    text: "",
    ruby: "",
    moras: [],
};

export const useTypingThemeStore = create<TypingThemeStore>((set) => ({
    ...initialState,
    updateStates: (next) => set((prev) => ({ ...prev, ...next })),
    reset: () => set(initialState)
}))

type TypingTheme = {
    id: number;
    text: string;
    ruby: string;
    moras: MoraWithStatus[];
}

export const useTypingTheme = () => {
    const store = useTypingThemeStore();
    const counter = useTypingCounter();
    const { calcProgress } = useIndicator();
    const { time } = useGameTimer();
    const { fetchTypingTheme } = useFetchTypingTheme();

    const fetch = async (
    level: number,
    difficult: number,
    id?: number
    ): Promise<TypingTheme> => {
    return await fetchTypingTheme(level, difficult, id);
    };

    const fetchAndStore = async(level: number, difficult: number, id?: number) => {
        const theme = await fetch(level, difficult, id);
        store.updateStates(theme);
    }

    const shouldFetch =
        store.moras.length == 0 ||
        (store.moras.length != 0 &&
            store.moras.every((m) => m.status == "correct"));
    
    React.useEffect(() => {
        if (!shouldFetch) return;
        const indicator = {
            total: counter.general.total.count,
            correct: counter.present.correct.count,
            incorrect: counter.present.incorrect.count,
            time,
        };
        const progress = calcProgress(store.level, store.difficult, indicator);
        fetchAndStore(
            progress.level,
            progress.difficulty,
            store.id
        );
        counter.present.correct.reset();
        counter.present.incorrect.reset();
    }, [shouldFetch])
}