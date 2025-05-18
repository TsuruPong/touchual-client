import * as React from 'react';
import { create } from "zustand"; 
import { useTimer, TimerKind } from "~/hooks/useTimer";

type GameTimer = {
    time: number,
    updateTime: (time: number) => void
}

const initialState: Omit<GameTimer, "updateTime"> = {
    time: 0
}

const useGameTimerStore = create<GameTimer>((set) => ({
    ...initialState,
    updateTime: (time) => set(() => ({time}))
}))

export const useGameTimer = (duration: number = 60) => {
    const { time, start, stop } = useTimer(TimerKind.SUB, duration);
    const update = useGameTimerStore((state) => state.updateTime);

    React.useEffect(() => {
        start();
    }, []);

    React.useEffect(() => {
        if (time <= 0) stop();
        update(time);
    }, [time]);

    const isTimeup = time <= 0;

    return {
        time,
        isTimeup,
        start,
        stop,
    };
};

