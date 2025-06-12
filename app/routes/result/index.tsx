import { useNavigate, useSearchParams } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { ResultPresentation } from "./ResultPresentation";

export default function Result() {
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

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
            wpm={parseInt(searchParams.get("wpm") ?? "0")}
            acc={parseInt(searchParams.get("acc") ?? "0")}
            total={parseInt(searchParams.get("total") ?? "0")}
            collect={parseInt(searchParams.get("collect") ?? "0")}
            incollect={parseInt(searchParams.get("incollect") ?? "0")}
            time={parseInt(searchParams.get("time") ?? "0")}
        />
    );
}
