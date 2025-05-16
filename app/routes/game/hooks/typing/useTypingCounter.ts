import { 
    usePresentCorrectTypingCountStore,
    usePresentIncorrectTypingCountStore,
    useTotalCorrectTypingCountStore,
    useTotalIncorrectTypingCountStore,
    useTotalTypingCountStore
} from "../store/useTypingCounterStore";

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