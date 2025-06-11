import * as React from "react";
import { InGamePresentation } from "./GamePresentation";
import { useTypingTheme, useTypingThemeStore } from "./hooks/useTypingTheme";
import { useTypingListener } from "./hooks/useTypingListener";
import { useAutoCompleate } from "./hooks/useAutoCompleate";
import { useGameTimer } from "./hooks/useGameTimer";
import { useGameTransition } from "./hooks/useGameTransition";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";

export default function Game() {
    useTypingTheme();
    useTypingListener();
    const text = useTypingThemeStore((state) => state.text);
    const ruby = useTypingThemeStore((state) => state.ruby);
    const { autocompleate } = useAutoCompleate();
    const { time, isTimeup, start, stop } = useGameTimer();
    const { forward, backward } = useGameTransition();

    React.useEffect(() => {
        start();
    }, []);

    React.useEffect(() => {
        if (isTimeup) {
            stop();
            forward({ aaa: "aaa", bbb: "bbb", ccc: "ccc" });
        }
    }, [isTimeup]);

    const handleKeydown = React.useCallback((event: KeyboardEvent) => {
        if (event.code === "Escape") backward();
    }, []);

    useKeyboardInput(handleKeydown);

    return (
        <InGamePresentation
            sentence={{ text, ruby }}
            autocompleates={autocompleate}
            time={time}
        />
    );
}
