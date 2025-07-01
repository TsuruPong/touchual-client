import * as React from "react";

export const useIndicator = () => {
    const calcWpm = React.useCallback((correct: number, time: number): number => {
        const wpm = (correct / 5) / (time / 60);
        return isNaN(wpm) ? 0 : Math.round(wpm * 100) / 100;
    }, []);

    const calcAcc = React.useCallback((total: number, correct: number): number => {
        const acc = (correct / total) * 100;
        return isNaN(acc) ? 0 : Math.round(acc * 100) / 100;
    }, []);

    const calcProgress = React.useCallback((
        currentLevel: number,
        currentDifficulty: number,
        indicator: { total: number; correct: number; incorrect: number; time: number }
    ): { level: number; difficulty: number } => {
        const acc = calcAcc(indicator.total, indicator.correct);
        const increaseCoef = calcIncreaseCoef(indicator.correct, indicator.incorrect, acc);
        const decreaseCoef = calcDecreaseCoef(indicator.incorrect);

        let level = currentLevel;
        let difficulty = calcDifficulty(currentDifficulty, increaseCoef, decreaseCoef);
        
        if (difficulty >= 1.0 && level !==5) {
            level++;
            difficulty = Math.round((difficulty % 1) * 10) / 10;
        }
        
        return { level, difficulty };
    }, []);

    const calcDifficulty = (currentDifficulty: number, incCoef: number, decCoef: number): number => {
        const result = currentDifficulty + incCoef * 0.75 - decCoef;
        return Number.isNaN(result) ? 0 : Math.round(result * 100) / 100;
    };

  const calcIncreaseCoef = React.useCallback((correct: number, incorrect: number, acc: number): number => {
      const accFactor = incorrect === 0 ? 1 : acc / 100;
      const rawScore = (correct - incorrect) * accFactor;
      const scale = 0.24;
      return Math.round(rawScore * scale * 100) / 100;
    },[]);

    const calcDecreaseCoef = React.useCallback((incorrect: number): number => {
        const decrease = incorrect * 0.05;
        return Math.round(decrease * 100) / 100;
    }, []);

    return { calcWpm, calcAcc, calcProgress };
};
