import { useNavigate, type LoaderFunction } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { CountDownPresentation } from "./CountdownPresentation";

export const loader: LoaderFunction = async () => {
    return null;
};

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
