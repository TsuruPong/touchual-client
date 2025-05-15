import { useNavigate, type LoaderFunction } from "react-router";
import { InGamePresentation } from "./GamePresentation";

export const loader: LoaderFunction = async () => {
    return null;
};

export default function Game() {
    const nav = useNavigate();

    const forward = () => {
        nav("/result");
    };

    const backward = () => {
        nav("/");
    };
    return (
        <InGamePresentation
            sentence={{
                text: "隣の客はよく柿食う客だ",
                ruby: "となりのきゃくはよくかきくうきゃくだ",
            }}
            autocompleates={[]}
            time={1}
        />
    );
}
