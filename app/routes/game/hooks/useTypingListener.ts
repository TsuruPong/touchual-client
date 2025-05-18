import * as React from 'react';
import { useKeyboardInput } from '~/hooks/useKeyboardInput';
import { useGameTransition } from './useGameTransition';
import { useTypingCounter } from './useTypingCounter';
import { useTypingValidator } from './useTypingValidator';
import { useMoraUpdater } from './useMoraUpdator';
import type { MoraWithStatus } from '~/types/extends/manimani';
import { useTypingThemeStore } from './useTypingTheme';

export const useTypingListener = () => {
    const { handleTyping } = useTypingHandler();    
    const handleKeydown = React.useCallback((event: KeyboardEvent) => {
        handleTyping(event);
    }, []);
    
    useKeyboardInput(handleKeydown);
}

const useTypingHandler = () => {
    const store = useTypingThemeStore();
    const moraRef = React.useRef(store.moras);
    React.useEffect(() => {
        moraRef.current = store.moras;
    }, [store.moras]);

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
        store.updateStates({
            moras: m
        });
    }, []);

    return { handleTyping };
}