import * as React from "react";
import { TimerKind, useTimer } from "~/hooks/useTimer";

export const CountDownPresentation: React.FC<{ handleTimeUp: () => void }> = ({
    handleTimeUp,
}) => {
    const { time, start } = useTimer(TimerKind.SUB, 3);
    React.useEffect(() => {
        start();
    }, []);
    React.useEffect(() => {
        if (time <= 0) {
            handleTimeUp();
        }
    }, [time]);
    return (
        <div className="flex justify-center items-center h-full">
            <div className="mx-auto my-0">
                <span>{time}</span>
            </div>
        </div>
    );
};
