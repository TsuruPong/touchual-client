import * as React from "react";
import {
    AutoCompleate,
    type AutoCompleateType,
} from "~/components/autocompleate";
import { TextEn, TextJa } from "~/components/typography";

export const InGamePresentation: React.FC<{
    sentence: { text: string; ruby: string };
    autocompleates: AutoCompleateType[];
    time: number;
}> = ({ sentence, autocompleates, time }) => {
    return (
        <div className="h-full grid grid-rows-[0.1fr,1fr,0.1fr] grid-flow-row gap-7">
            <div />
            <div className="flex justify-center items-center">
                <div className="w-fit flex flex-col">
                    <div className="select-none text text-2xl w-full h-[40px] flex items-center">
                        <TextEn>{time}</TextEn>
                    </div>
                    <div className="select-none text text-2xl w-full flex items-center">
                        <TextJa>{sentence.text}</TextJa>
                    </div>
                    <div className="select-none text text-2xl w-full flex items-center">
                        <TextJa>{sentence.ruby}</TextJa>
                    </div>
                    <div className="select-none text text-2xl w-full h-[70px] flex items-center">
                        <AutoCompleate autocompleates={autocompleates} />
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
};
