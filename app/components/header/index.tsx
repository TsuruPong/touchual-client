import * as React from "react";
import { TextEn } from "../typography";

export const Header: React.FC = () => {
    return (
        <div className="h-24 p-1 border-b-1 border-gray-500">
            <div className="flex h-full">
                <img className="w-23 h-hull" src="/keyboard.svg" />
                <TextEn className="text-3xl flex items-center">Touchual</TextEn>
            </div>
        </div>
    );
};
