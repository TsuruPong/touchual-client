import * as React from "react";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { KeyboardLayout } from "./KeyboardLayout";

export const VirtualKeyboard: React.FC = () => {
    const [keysPressed, setKeysPressed] = React.useState<Set<KeyboardEvent>>(
        new Set()
    );

    const handleKeydown = (event: KeyboardEvent) => {
        setKeysPressed(
            (prevKeysPressed) => new Set([...prevKeysPressed, event])
        );
    };

    const handleKeyup = (event: KeyboardEvent) => {
        setKeysPressed((prevKeysPressed) => {
            const newKeysPressed = new Set(prevKeysPressed);
            for (const k of newKeysPressed) {
                if (k.code == event.code) {
                    newKeysPressed.delete(k);
                }
            }
            return newKeysPressed;
        });
    };

    useKeyboardInput(handleKeydown, handleKeyup);

    const isPress = (code: string): boolean => {
        return Array.from(keysPressed).some((k) => k.code == code);
    };

    return <KeyboardLayout isPress={isPress} />;
};
