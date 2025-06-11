import { useNavigate } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { CountDownPresentation } from "./CountdownPresentation";

export default function Countdown() {
    const nav = useNavigate();

    useKeyboardInput((event: KeyboardEvent) => {
        if (event.code == "Escape") backward();
    });

    const forward = () => {
        nav("/game");
    };

    const backward = () => {
        nav("/");
    };

    return <CountDownPresentation handleTimeUp={forward} />;
}
