import * as React from "react";

export const ResultPresentation: React.FC<{
    wpm: number;
    acc: number;
    total: number;
    correct: number;
    incorrect: number;
    time: number;
}> = ({ wpm, acc, total, correct, incorrect, time }) => {
    return (
        <div className="w-full h-full px-96 py-4">
            <div className="w-full h-full">
                <div className="h-full flex flex-col justify-end">
                    <div className="w-full h-4/5 flex flex-col justify-end">
                        <div className="grid grid-cols-2">
                            <div className="h-full grid grid-rows-2">
                                <div className="w-full h-full text-6xl flex justify-center items-center">
                                    <span>{`WPM : ${wpm}`}</span>
                                </div>
                                <div className="w-full h-full text-6xl flex justify-center items-center">
                                    <span>{`ACC : ${acc}%`}</span>
                                </div>
                            </div>
                            <div className="h-full grid grid-rows-2">
                                <div />
                                <div className="h-full grid grid-cols-2">
                                    <div className="h-full grid grid-rows-2">
                                        <div className="text-3xl">
                                            <span>character</span>
                                        </div>
                                        <div className="text-3xl">
                                            <span>{`${total}/${correct}/${incorrect}`}</span>
                                        </div>
                                    </div>
                                    <div className="h-full grid grid-rows-2">
                                        <div className="text-3xl">
                                            <span>time</span>
                                        </div>
                                        <div className="text-3xl">
                                            <span>{`${time}sec`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/5 flex justify-center items-end">
                        <span>スペースキーでリスタート</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
