import { useNavigate, type LoaderFunction } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { TopPresentation } from "./TopPresentation";

export default function Top() {
    const nav = useNavigate();

    useKeyboardInput((event: KeyboardEvent) => {
        if (event.code == "Escape") {
            backward();
        }
        if (event.code == "Space") {
            forward();
        }
    });

    const forward = () => {
        nav("/countdown");
    };

    const backward = () => {
        nav("/");
    };

    return <TopPresentation />;
}
