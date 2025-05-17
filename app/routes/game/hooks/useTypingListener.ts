import * as React from 'react';
import { useTypingHandler } from './typing/useTypingHandler';
import { useKeyboardInput } from '~/hooks/useKeyboardInput';
import { useGameTransition } from './useGameTransition';

export const useTypingListener = () => {
    const { handleTyping } = useTypingHandler();
    const { backward } = useGameTransition();
    
    const handleKeydown = React.useCallback((event: KeyboardEvent) => {
    if (event.key == "Escape") {
            backward();
        }
        handleTyping(event);
    }, []);
    
    useKeyboardInput(handleKeydown);
}