import * as React from "react";
import { TextEn, TextJa } from "~/components/typography";

export const ResultPresentation: React.FC<{
    wpm: number;
    acc: number;
    total: number;
    collect: number;
    incollect: number;
    time: number;
}> = ({ wpm, acc, total, collect, incollect, time }) => {
    return (
        <div className="w-full h-full px-96 py-4">
            <div className="w-full h-full">
                <div className="h-full flex flex-col justify-end">
                    <div className="w-full h-4/5 flex flex-col justify-end">
                        <div className="grid grid-cols-2">
                            <div className="h-full grid grid-rows-2">
                                <div className="w-full h-full text-6xl flex justify-center items-center">
                                    <TextEn>{`WPM : ${wpm}`}</TextEn>
                                </div>
                                <div className="w-full h-full text-6xl flex justify-center items-center">
                                    <TextEn>{`ACC : ${acc}%`}</TextEn>
                                </div>
                            </div>
                            <div className="h-full grid grid-rows-2">
                                <div />
                                <div className="h-full grid grid-cols-2">
                                    <div className="h-full grid grid-rows-2">
                                        <div className="text-3xl">
                                            <TextEn>character</TextEn>
                                        </div>
                                        <div className="text-3xl">
                                            <TextEn>{`${total}/${collect}/${incollect}`}</TextEn>
                                        </div>
                                    </div>
                                    <div className="h-full grid grid-rows-2">
                                        <div className="text-3xl">
                                            <TextEn>time</TextEn>
                                        </div>
                                        <div className="text-3xl">
                                            <TextEn>{`${time}sec`}</TextEn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/5 flex justify-center items-end">
                        <TextJa>スペースキーでリスタート</TextJa>
                    </div>
                </div>
            </div>
        </div>
    );
};
