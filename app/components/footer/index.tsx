import * as React from "react";
import { TextEn } from "../typography";

export const Footer: React.FC = () => {
    return (
        <div className="w-full h-[100px]">
            <div className="h-full flex justify-center items-end">
                <div className="w-[75%] h-[50%] flex">
                    <div className="flex items-center">
                        <TextEn>（C） 2025 TsuruPong</TextEn>
                    </div>
                </div>
            </div>
        </div>
    );
};
