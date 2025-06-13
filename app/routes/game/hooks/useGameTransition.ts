import { useTransition } from "~/hooks/useTransition"

export const useGameTransition = () => {
    const { makeTransition } = useTransition();
    const forward = (records: Record<string, string>) => {
        const fn = makeTransition("/result", records);
        fn();
    }

    const backward = () => {
        const fn = makeTransition("/");
        fn();
    }

    return { forward, backward }
}