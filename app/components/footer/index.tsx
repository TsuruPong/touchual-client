import * as React from "react";
import { TextEn } from "../typography";
import { Link } from "react-router";

export const Footer: React.FC = () => {
    return (
        <div className="h-24 flex flex-col justify-center border-t-1 border-gray-500">
            <div className="h-[80%] flex justify-center">
                <div className="w-[70%] h-full flex justify-between items-center">
                    <TextEn className="text-sm select-none">
                        Copyright 🄫2025; Designed by TsuruPong
                    </TextEn>
                    <a href="https://github.com/TsuruPong">
                        <img className="w-8 h-8" src="/github-mark.svg" />
                    </a>
                </div>
            </div>
        </div>
    );
};
