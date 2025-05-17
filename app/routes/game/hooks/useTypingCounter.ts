import { create } from "zustand"; 

type TypingCountStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useTypingCountStore = () => {
    return create<TypingCountStore>((set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set(() => ({ count: 0 })),
    }));
};

const useTotalTypingCountStore = useTypingCountStore();
const useTotalCorrectTypingCountStore = useTypingCountStore();
const useTotalIncorrectTypingCountStore = useTypingCountStore();
const usePresentCorrectTypingCountStore = useTypingCountStore();
const usePresentIncorrectTypingCountStore = useTypingCountStore();

export const useTypingCounter = () => {
    const total = useTotalTypingCountStore();
    const totalCorrect = useTotalCorrectTypingCountStore();
    const totalIncorrect = useTotalIncorrectTypingCountStore();
    const presentCorrect = usePresentCorrectTypingCountStore();
    const presentIncorrect = usePresentIncorrectTypingCountStore();
    
    return {
        general: {
            total: total,
            correct: totalCorrect,
            incorrect: totalIncorrect
        },
        present: {
            correct: presentCorrect,
            incorrect: presentIncorrect
        },
        reset: () => {
            total.reset();
            totalCorrect.reset();
            totalIncorrect.reset();
            presentCorrect.reset();
            presentIncorrect.reset();
        }
    }
}