import * as React from "react";
import { TextJa } from "~/components/typography";

export const TopPresentation: React.FC<{}> = ({}) => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="mx-auto my-0">
                <TextJa>スペースキーを押下</TextJa>
            </div>
        </div>
    );
};
