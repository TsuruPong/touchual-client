import * as React from 'react';
import { useTypingThemeStore } from '../store/useTypingThemeStore';
import { useTypingCounter } from './useTypingCounter';
import { useTypingValidator } from './useTypingValidator';
import { useMoraUpdater } from './useMoraUpdator';
import type { MoraWithStatus } from '~/types/extends/manimani';

export const useTypingHandler = () => {
    const TypingThemeStore = useTypingThemeStore();
    const moraRef = React.useRef(TypingThemeStore.moras);
    React.useEffect(() => {
        moraRef.current = TypingThemeStore.moras;
    }, [TypingThemeStore.moras]);

    const { general, present } = useTypingCounter();
    const { isTypingCorrect } = useTypingValidator();
    const { updateCorrect, updateIncorrect } = useMoraUpdater();

    const handleTyping = React.useCallback((event: KeyboardEvent) => {
        event.preventDefault();
        const target = moraRef.current;
        if (target.length == 0) return;
        let m: MoraWithStatus[] = [...target];
        if (m.length == 0) return;
        general.total.increment();
        if (isTypingCorrect(m, event.key)) {
            general.correct.increment();
            present.correct.increment();
            m = updateCorrect(m, event.key);
        } else {
            general.incorrect.increment();
            present.incorrect.increment();
            m = updateIncorrect(m);
        }
        TypingThemeStore.updateStates({
            moras: m
        });
    }, []);

    return { handleTyping };
}