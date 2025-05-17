import { useNavigate } from "react-router";

export const useTransition = () => {
    const nav = useNavigate();

    const makeTransition = (path: string, option?: Record<string, string>) => {
        return () => {
            if (option === undefined) {
                nav(path);
                return;
            }

            const params = new URLSearchParams(option);
            nav(`${path}?${params.toString()}`);
        };
    };

    return { makeTransition };
};
