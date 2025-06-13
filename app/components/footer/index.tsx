import * as React from "react";
import { TextEn } from "../typography";

export const Footer: React.FC = () => {
    return (
        <div className="h-24 flex flex-col justify-center">
            <div className="h-[80%] flex justify-center">
                <div className="w-[70%] h-full flex justify-between items-center">
                    <TextEn className="text-sm">
                        Copyright 🄫2025; Designed by TsuruPong
                    </TextEn>
                    <TextEn>aaa</TextEn>
                </div>
            </div>
        </div>
    );
};
