import * as React from "react";
import { TextEn } from "../typography";
import { Link } from "react-router";

export const Header: React.FC = () => {
    return (
        <div className="h-24 p-1 border-b-1 border-gray-500">
            <div className="flex h-full">
                <Link to="/">
                    <div className="flex h-full">
                        <img
                            className="w-23 h-hull select-none"
                            src="/keyboard.svg"
                        />
                        <TextEn className="text-3xl flex items-center select-none">
                            Touchual
                        </TextEn>
                    </div>
                </Link>
            </div>
        </div>
    );
};
