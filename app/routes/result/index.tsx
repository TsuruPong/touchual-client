import { useNavigate, useParams } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { ResultPresentation } from "./ResultPresentation";

export default function Result() {
    const nav = useNavigate();
    const { wpm, acc, total, collect, incollect, time } = useParams();

    useKeyboardInput((event: KeyboardEvent) => {
        if (event.code == "Escape") {
            backward();
        }
        if (event.code == "Space") {
            forward();
        }
    });

    const forward = () => {
        nav("/");
    };

    const backward = () => {
        nav("/");
    };

    return (
        <ResultPresentation
            wpm={parseInt(wpm ?? "0")}
            acc={parseInt(acc ?? "0")}
            total={parseInt(total ?? "0")}
            collect={parseInt(collect ?? "0")}
            incollect={parseInt(incollect ?? "0")}
            time={parseInt(time ?? "0")}
        />
    );
}
