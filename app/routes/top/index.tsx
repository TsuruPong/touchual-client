import { useNavigate, type MetaArgs } from "react-router";
import { useKeyboardInput } from "~/hooks/useKeyboardInput";
import { TopPresentation } from "./TopPresentation";

export function meta({}: MetaArgs) {
    return [{ title: "Touchual-Top" }, { name: "description", content: "Top" }];
}

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
