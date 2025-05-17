import { useNavigate } from "react-router";

export const useTransition = () => {
    const nav = useNavigate();

    const makeTransition = (): (path: string, option?: Record<string, string>) => void => {
        return (path, option = {}) => {
            const hasQuery = Object.keys(option).length > 0;

            if (!hasQuery) {
                nav(path);
                return;
            }

            const params = new URLSearchParams(option);
            nav(`${path}?${params.toString()}`);
        };
    };

    return {makeTransition}
};
