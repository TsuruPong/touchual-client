import { useTimer, TimerKind } from "~/hooks/useTimer";

export const useGameTimer = (duration: number = 60) => {
    const { time, start, stop } = useTimer(TimerKind.SUB, duration);

    const isTimeup = time <= 0;

    return {
        time,
        isTimeup,
        start,
        stop,
    };
};
