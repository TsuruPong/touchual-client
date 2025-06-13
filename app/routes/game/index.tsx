import type { MetaArgs } from "react-router";
import * as React from "react";
import { InGamePresentation } from "./GamePresentation";
import { useTypingTheme, useTypingThemeStore } from "./hooks/useTypingTheme";
import { useTypingListener } from "./hooks/useTypingListener";
import { useAutoCompleate } from "./hooks/useAutoCompleate";
import { useGameTimer } from "./hooks/useGameTimer";
import { useGameTransition } from "./hooks/useGameTransition";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { useIndicator } from "./hooks/useIndicator";
import { useTypingCounter } from "./hooks/useTypingCounter";

export function meta({}: MetaArgs) {
    return [
        { title: "Touchual-Game" },
        { name: "description", content: "Game" },
    ];
}

export default function Game() {
    useTypingTheme();
    useTypingListener();
    const text = useTypingThemeStore((state) => state.text);
    const ruby = useTypingThemeStore((state) => state.ruby);
    const { autocompleate } = useAutoCompleate();
    const { time, isTimeup, start, stop } = useGameTimer();
    const { forward, backward } = useGameTransition();
    const { calcWpm, calcAcc, calcProgress } = useIndicator();
    const { general } = useTypingCounter();

    React.useEffect(() => {
        start();
    }, []);

    React.useEffect(() => {
        if (isTimeup) {
            stop();
            const wpm = calcWpm(general.total.count, 60);
            const acc = calcAcc(general.total.count, general.correct.count);
            forward({
                wpm: wpm.toString(),
                acc: acc.toString(),
                total: general.total.count.toString(),
                collect: general.correct.count.toString(),
                incollect: general.incorrect.count.toString(),
                time: "60",
            });
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
